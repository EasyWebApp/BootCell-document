import { Nav, NavLink, Button } from 'boot-cell';

import { FooterList } from '../../../component/FooterList';
import { Case } from './Case';

import style from './index.module.less';
import { headers, products, footers } from './data';

const logo = (
    <img style={{ width: '24px' }} src="https://github.com/EasyWebApp.png" />
);

export default () => (
    <>
        <div className="bg-dark sticky-top py-1">
            <Nav className="container" align="between">
                <NavLink className="text-light">{logo}</NavLink>
                {headers.map(header => (
                    <NavLink key={header} className="text-light">
                        {header}
                    </NavLink>
                ))}
            </Nav>
        </div>
        <header className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-4 font-weight-normal">Punny headline</h1>
                <p className="lead font-weight-normal">
                    And an even wittier subheading to boot. Jumpstart your
                    marketing efforts with this example based on Apple’s
                    marketing pages.
                </p>
                <Button variant="outline-secondary" href="#">
                    Coming soon
                </Button>
            </div>
            <div
                className={`${style['product-device']} shadow-sm d-none d-lg-block`}
            />
            <div
                className={`${style['product-device']} ${style['product-device-2']} shadow-sm d-none d-lg-block`}
            />
        </header>
        <main>
            {products.map(row => (
                <div className="d-md-flex w-100 my-md-3 pl-md-3">
                    {row.map(item => (
                        <Case
                            {...item}
                            name="Another headline"
                            description="And an even wittier subheading."
                        />
                    ))}
                </div>
            ))}
        </main>
        <footer className="container py-5">
            <div className="row">
                <div className="col-12 col-md">
                    {logo}
                    <small className="d-block mb-3 text-muted">
                        © 2019-{new Date().getFullYear()}
                    </small>
                </div>
                {footers.map(item => (
                    <FooterList
                        key={item.title}
                        colSpan={12 / footers.length}
                        {...item}
                    />
                ))}
            </div>
        </footer>
    </>
);
