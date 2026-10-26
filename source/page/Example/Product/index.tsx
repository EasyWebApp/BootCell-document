import { Nav, NavLink, Button, Row, Col } from 'boot-cell';

import { FooterList } from '../../../component/FooterList';
import { Case } from './Case';

import * as style from './index.module.less';
import { headers, products, footers } from './data';

const logo = (
    <img style={{ width: '24px' }} src="https://github.com/EasyWebApp.png" />
);

export default () => (
    <>
        <div className="bg-inverse sticky-top py-1">
            <Nav className="container d-flex justify-content-between">
                <NavLink className="fg-white">{logo}</NavLink>
                {headers.map(header => (
                    <NavLink key={header} className="fg-white">
                        {header}
                    </NavLink>
                ))}
            </Nav>
        </div>
        <header className="position-relative overflow-hidden p-5 md:p-12 md:m-5 text-center bg-1">
            <Col md={5} className="lg:p-12 mx-auto my-12">
                <h1 className="fs-5xl fw-light fw-normal">Punny headline</h1>
                <p className="fs-lg fw-light fw-normal">
                    And an even wittier subheading to boot. Jumpstart your
                    marketing efforts with this example based on Apple’s
                    marketing pages.
                </p>
                <Button variant="outline" theme="secondary" href="#">
                    Coming soon
                </Button>
            </Col>
            <div
                className={`${style['product-device']} shadow-sm d-none lg:d-block`}
            />
            <div
                className={`${style['product-device']} ${style['product-device-2']} shadow-sm d-none lg:d-block`}
            />
        </header>
        <main>
            {products.map(row => (
                <div className="md:d-flex w-100 md:my-5 md:ps-5">
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
        <footer className="container py-12">
            <Row>
                <Col xs={12} md="auto">
                    {logo}
                    <small className="d-block mb-5 fg-3">
                        © 2019-{new Date().getFullYear()}
                    </small>
                </Col>
                {footers.map(item => (
                    <FooterList
                        key={item.title}
                        colSpan={12 / footers.length}
                        {...item}
                    />
                ))}
            </Row>
        </footer>
    </>
);
