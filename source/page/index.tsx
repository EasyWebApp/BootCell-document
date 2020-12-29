import groupBy from 'lodash.groupby';
import { component, createCell, mixin } from 'web-cell';
import { CellRouter } from 'cell-router/source';
import { SpinnerBox } from 'boot-cell/source/Prompt/Spinner';

import { history } from '../model';
import { PageFrame } from '../component/PageBox';
import { DocumentBox } from '../component/DocumentBox';

import { HomePage } from './Home';
import documents from '../../document/dist';
import { HomePage as ExampleHome } from './Example/Home';
import examples from './Example';

documents.sort(({ meta: { title: A } }, { meta: { title: B } }) =>
    A.localeCompare(B)
);
const side_menu = groupBy(
    documents.map(({ paths: [href], meta }) => ({ ...meta, href })),
    'group'
);

interface PageRouterState {
    loading: boolean;
}

@component({
    tagName: 'page-router',
    renderTarget: 'children'
})
export class PageRouter extends mixin<{}, PageRouterState>() {
    state = { loading: false };

    protected menu = [
        {
            title: 'Documentation',
            href: documents[0].paths[0]
        },
        {
            title: 'API',
            href: 'https://web-cell.dev/BootCell/'
        },
        {
            title: 'Examples',
            href: 'example'
        },
        {
            title: 'Source code',
            href: 'https://github.com/EasyWebApp/BootCell'
        }
    ];

    protected routes = [
        {
            paths: [''],
            component: () => (
                <PageFrame menu={this.menu}>
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
                            menu={this.menu}
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
                <PageFrame menu={this.menu} activeIndex={2}>
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
