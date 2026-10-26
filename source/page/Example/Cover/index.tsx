import classNames from 'classnames';
import { Button, Nav, NavLink } from 'boot-cell';

import * as style from './index.module.less';

export default () => (
    <div
        className={classNames(
            'd-flex',
            'flex-column',
            'w-100',
            'vh-100',
            'p-5',
            'text-center',
            'fg-white',
            style['cover-container']
        )}
    >
        <header className="masthead w-100 mx-auto mb-auto">
            <h3 className="masthead-brand mb-0 md:float-start">Cover</h3>
            <Nav className="fg-3 md:float-end masthead-nav justify-content-center">
                <NavLink>Home</NavLink>
                <NavLink>Features</NavLink>
                <NavLink>Contact</NavLink>
            </Nav>
        </header>

        <main className="mx-auto py-0 px-7">
            <h1>Cover your page.</h1>
            <p className="fs-lg fw-light">
                Cover is a one-page template for building simple and beautiful
                home pages. Download, edit the text, and add your own fullscreen
                background photo to make it your own.
            </p>

            <Button variant="solid" theme="secondary" size="lg" href="#">
                Learn more
            </Button>
        </main>

        <footer className="mx-auto mt-auto fg-3">
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
