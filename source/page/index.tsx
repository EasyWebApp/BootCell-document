import { component, createCell, mixin } from 'web-cell';
import { CellRouter } from 'cell-router/source';
import { SpinnerBox } from 'boot-cell/source/Prompt/Spinner';

import { history } from '../model';
import { PageFrame } from '../component/PageBox';
import { DocumentBox } from '../component/DocumentBox';

import { main_menu, side_menu } from './data';
import { HomePage } from './Home';
import documents from '../../document/dist';
import { HomePage as ExampleHome } from './Example/Home';
import examples from './Example';

interface PageRouterState {
    loading: boolean;
}

@component({
    tagName: 'page-router',
    renderTarget: 'children'
})
export class PageRouter extends mixin<{}, PageRouterState>() {
    state = { loading: false };

    protected routes = [
        {
            paths: [''],
            component: () => (
                <PageFrame menu={main_menu}>
                    <HomePage entry={documents[0]} />
                </PageFrame>
            )
        },
        ...documents.map(
            ({ paths, component, meta: { title, description } }) => ({
                paths,
                component: async () => {
                    const Content = await component();

                    return () => (
                        <PageFrame
                            menu={main_menu}
                            activeIndex={0}
                            subMenu={documents}
                        >
                            <DocumentBox
                                menu={side_menu}
                                path={paths[0].replace(/^components\//, '')}
                                header={title}
                                description={description}
                            >
                                <Content />
                            </DocumentBox>
                        </PageFrame>
                    );
                }
            })
        ),
        {
            paths: ['example'],
            component: () => (
                <PageFrame menu={main_menu} activeIndex={2}>
                    <ExampleHome />
                </PageFrame>
            )
        },
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
