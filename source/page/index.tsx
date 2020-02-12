import groupBy from 'lodash.groupby';
import { component, createCell, Fragment, on } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { HTMLRouter } from 'cell-router/source';
import { NavBar } from 'boot-cell/source/Navigator/NavBar';

import { history } from '../model';
import { SideNav } from '../component/SideNav';
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
                    <div className="d-flex">
                        <SideNav className="p-3" menu={side_menu} />

                        <div className="flex-fill p-3">
                            <h1>{title}</h1>
                            <p className="lead">{description}</p>
                            <Content />
                        </div>
                    </div>
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

    render() {
        return (
            <Fragment>
                <NavBar brand="BootCell" />

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
