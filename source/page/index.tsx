import groupBy from 'lodash.groupby';
import { component, createCell, Fragment, on } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { HTMLRouter } from 'cell-router/source';
import { NavBar } from 'boot-cell/source/Navigator/NavBar';

import { history } from '../model';
import { PageFrame } from '../component/PageFrame';
import { HomePage } from './Home';
import routes from '../../document/dist';

const side_menu = groupBy(
    routes.map(({ paths: [href], meta }) => ({ ...meta, href })),
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
        ...routes.map(({ paths, component, meta: { title, description } }) => ({
            paths,
            component: async () => {
                const Content = await component();

                return () => (
                    <PageFrame
                        menu={side_menu}
                        title={title}
                        description={description}
                    >
                        <Content />
                    </PageFrame>
                );
            }
        }))
    ];

    @on('click', 'pre[class*="language-"]')
    autoCopy({ target }: MouseEvent) {
        self.getSelection()
            .getRangeAt(0)
            .selectNode(target as Node);

        document.execCommand('copy');
    }

    render() {
        return (
            <Fragment>
                <NavBar
                    brand="BootCell"
                    menu={[
                        {
                            title: 'API document',
                            href: 'https://web-cell.dev/BootCell/'
                        },
                        {
                            title: 'Source code',
                            href: 'https://github.com/EasyWebApp/BootCell'
                        }
                    ]}
                />
                <main className="mt-5">{super.render()}</main>

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
