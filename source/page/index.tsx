import groupBy from 'lodash.groupby';
import { component, createCell, mixin } from 'web-cell';
import { CellRouter } from 'cell-router/source';
import { SpinnerBox } from 'boot-cell/source/Prompt/Spinner';

import { history } from '../model';
import { PageBox } from '../component/PageBox';
import { PageFrame } from '../component/DocumentBox';
import { HomePage } from './Home';
import documents from '../../document/dist';
import examples from './Example';

const side_menu = groupBy(
    documents.map(({ paths: [href], meta }) => ({ ...meta, href })),
    'group'
);

interface PageFrameState {
    loading: boolean;
}

@component({
    tagName: 'page-router',
    renderTarget: 'children'
})
export class PageRouter extends mixin<{}, PageFrameState>() {
    state = { loading: false };

    protected routes = [
        { paths: [''], component: HomePage },
        ...documents.map(
            ({ paths, component, meta: { title, description } }) => ({
                paths,
                component: async () => {
                    const Content = await component();

                    return () => (
                        <PageBox>
                            <PageFrame
                                menu={side_menu}
                                header={title}
                                description={description}
                            >
                                <Content />
                            </PageFrame>
                        </PageBox>
                    );
                }
            })
        ),
        ...examples
    ];

    render() {
        return (
            <SpinnerBox
                style={{ minHeight: '90vh' }}
                cover={this.state.loading}
            >
                <CellRouter
                    routes={this.routes}
                    history={history}
                    onPageLoad={() => this.setState({ loading: true })}
                    onPageRender={() =>
                        this.state.loading && this.setState({ loading: false })
                    }
                />
            </SpinnerBox>
        );
    }
}
