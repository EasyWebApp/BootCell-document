import { component, createCell, Fragment } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { HTMLRouter } from 'cell-router/source';
import { NavBar } from 'boot-cell/source/Navigator/NavBar';

import { history } from '../model';
import routes from '../../document/dist';

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

    render() {
        return (
            <Fragment>
                <NavBar title="BootCell" />
                <main className="mt-5 p-3 markdown-body">{super.render()}</main>
            </Fragment>
        );
    }
}
