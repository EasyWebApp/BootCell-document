import groupBy from 'lodash.groupby';
import { component, createCell, Fragment, on } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { HTMLRouter } from 'cell-router/source';
import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { SpinnerBox } from 'boot-cell/source/Prompt/Spinner';

import { history } from '../model';
import { PageFrame } from '../component/PageFrame';
import { HomePage } from './Home';
import documents from '../../document/dist';
import examples from './Example';

const side_menu = groupBy(
    documents.map(({ paths: [href], meta }) => ({ ...meta, href })),
    'group'
);

@observer
@component({
    tagName: 'page-router',
    renderTarget: 'children'
})
export class PageRouter extends HTMLRouter {
    protected history = history;
    protected routes = [
        { paths: [''], component: HomePage },
        ...documents.map(
            ({ paths, component, meta: { title, description } }) => ({
                paths,
                component: async () => {
                    const Content = await component();

                    return () => (
                        <PageFrame
                            menu={side_menu}
                            header={title}
                            description={description}
                        >
                            <Content />
                        </PageFrame>
                    );
                }
            })
        ),
        ...examples
    ];

    private menu = [
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

    @on('click', 'pre[class*="language-"]')
    autoCopy({ target }: MouseEvent) {
        self.getSelection()
            .getRangeAt(0)
            .selectNode(target as Node);

        document.execCommand('copy');
    }

    render() {
        const [path_0, path_1] = history.path.split('/');

        return (
            <Fragment>
                {path_0 === 'example' && path_1 ? null : (
                    <NavBar brand="BootCell" menu={this.menu} />
                )}
                <SpinnerBox cover={this.state.loading}>
                    {super.render()}
                </SpinnerBox>

                <footer className="text-center bg-light py-5">
                    Proudly developed with{' '}
                    <a target="_blank" href="https://web-cell.dev/">
                        WebCell v2
                    </a>
                    ,{' '}
                    <a target="_blank" href="https://web-cell.dev/BootCell/">
                        BootCell v1
                    </a>{' '}
                    &amp;{' '}
                    <a
                        target="_blank"
                        href="https://github.com/EasyWebApp/MarkCell"
                    >
                        MarkCell
                    </a>
                </footer>
            </Fragment>
        );
    }
}
