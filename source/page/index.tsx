import groupBy from 'lodash.groupby';
import { component, createCell, Fragment, on } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { HTMLRouter } from 'cell-router/source';
import { NavBar } from 'boot-cell/source/Navigator/NavBar';

import { history } from '../model';
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
                    <Fragment>
                        <h1>{title}</h1>
                        <p className="lead">{description}</p>
                        <Content />
                    </Fragment>
                );
            }
        }))
    ];

    @on('click', 'pre > code')
    autoCopy({ target }: MouseEvent) {
        self.getSelection()
            .getRangeAt(0)
            .selectNode(target as Node);

        document.execCommand('copy');
    }

    renderSideMenu() {
        return (
            <ul className="list-unstyled">
                {Object.entries(side_menu).map(([group, list]) => (
                    <li>
                        <h5>{group}</h5>

                        <ul className="list-unstyled">
                            {list.map(({ href, title }) => (
                                <li>
                                    <a href={href}>{title}</a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        );
    }

    renderFooter() {
        return (
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
        );
    }

    render() {
        const documents = history.path.startsWith('component');

        return (
            <Fragment>
                <NavBar title="BootCell" />

                <div className="mt-5 d-flex">
                    {!documents ? null : (
                        <nav className="p-3">{this.renderSideMenu()}</nav>
                    )}
                    <main className="flex-fill p-3">{super.render()}</main>
                </div>
                {documents ? null : this.renderFooter()}
            </Fragment>
        );
    }
}
