import classNames from 'classnames';
import { Button, Nav, NavLink } from 'boot-cell';

import * as style from './index.module.less';

export default () => (
    <div
        className={classNames(
            'd-flex',
            'flex-column',
            'vw-100',
            'vh-100',
            'p-3',
            'text-center',
            'text-white',
            style['cover-container']
        )}
    >
        <header className="masthead w-100 mx-auto mb-auto">
            <h3 className="masthead-brand mb-0 float-md-left">Cover</h3>
            <Nav
                className="text-white-50 float-md-right"
                itemMode="masthead"
                align="center"
            >
                <NavLink>Home</NavLink>
                <NavLink>Features</NavLink>
                <NavLink>Contact</NavLink>
            </Nav>
        </header>

        <main className="mx-auto py-0 px-4">
            <h1>Cover your page.</h1>
            <p className="lead">
                Cover is a one-page template for building simple and beautiful
                home pages. Download, edit the text, and add your own fullscreen
                background photo to make it your own.
            </p>

            <Button variant="secondary" size="lg" href="#">
                Learn more
            </Button>
        </main>

        <footer className="mx-auto mt-auto text-white-50">
            <p>
                Cover template for <a href=".">BootCell</a>, by{' '}
                <a target="_blank" href="https://twitter.com/mdo">
                    @mdo
                </a>{' '}
                &amp;
                <a target="_blank" href="https://github.com/TechQuery">
                    @TechQuery
                </a>
                .
            </p>
        </footer>
    </div>
);
