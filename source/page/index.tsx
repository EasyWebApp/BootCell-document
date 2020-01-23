import groupBy from 'lodash.groupby';
import { component, createCell, Fragment, on } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { HTMLRouter } from 'cell-router/source';
import { HTMLHyperLinkProps } from 'boot-cell/source/utility/type';
import { NavBar } from 'boot-cell/source/Navigator/NavBar';

import { history } from '../model';
import routes from '../../document/dist';

const documents = Promise.all(
    routes.map(async ({ paths: [href], meta }) => {
        const { title, group } = await meta();

        return { title, href, group };
    })
).then(list => groupBy(list, 'group'));

@observer
@component({
    tagName: 'page-router',
    renderTarget: 'children'
})
export class PageRouter extends HTMLRouter {
    protected history = history;
    protected routes = routes.map(({ paths, component, meta }) => ({
        paths,
        component: async () => {
            const { title, description } = await meta(),
                Content = await component();

            return () => (
                <Fragment>
                    <h1>{title}</h1>
                    <p className="lead">{description}</p>
                    <Content />
                </Fragment>
            );
        }
    }));

    state = { sideMenu: {} };

    async connectedCallback() {
        super.connectedCallback();

        const sideMenu = await documents;

        this.setState({ sideMenu });
    }

    @on('click', 'pre > code')
    autoCopy({ target }: MouseEvent) {
        self.getSelection()
            .getRangeAt(0)
            .selectNode(target as Node);

        document.execCommand('copy');
    }

    renderSideMenu() {
        const map = this.state.sideMenu as {
            [key: string]: HTMLHyperLinkProps[];
        };

        return (
            <ul className="list-unstyled">
                {Object.entries(map).map(([group, list]) => (
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

    render() {
        return (
            <Fragment>
                <NavBar title="BootCell" />

                <div className="mt-5 d-flex">
                    <nav className="p-3">{this.renderSideMenu()}</nav>

                    <main className="p-3">{super.render()}</main>
                </div>
            </Fragment>
        );
    }
}
