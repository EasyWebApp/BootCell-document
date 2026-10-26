import {
    Nav,
    NavLink,
    Navbar,
    NavbarBrand,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Container,
    Row,
    Col
} from 'boot-cell';

import { FooterList } from '../../../component/FooterList';
import prices from './index.json';
import { footers } from '../Product/data';

const foot_nav = [...footers];

foot_nav.splice(-2, 1);

export default () => (
    <>
        <Navbar variant="light" bg="1">
            <NavbarBrand>Company name</NavbarBrand>
            <Nav>
                <NavLink>Features</NavLink>
                <NavLink>Enterprise</NavLink>
                <NavLink>Support</NavLink>
                <NavLink>Pricing</NavLink>
            </Nav>
            <Button variant="outline" theme="primary">
                Sign up
            </Button>
        </Navbar>
        <div
            className="px-5 py-5 md:pt-12 md:pb-7 mx-auto text-center"
            style={{ maxWidth: '43.75rem' }}
        >
            <h1 className="fs-5xl fw-light">Pricing</h1>
            <p className="fs-lg fw-light">
                Quickly build an effective pricing table for your potential
                customers with this Bootstrap example. It's built with default
                Bootstrap components and utilities with little customization.
            </p>
        </div>
        <Container>
            <div className="d-flex flex-wrap gap-5 text-center">
                {prices.map(({ level, amount, details, action }, index) => (
                    <Card key={level} className="shadow-sm flex-fill">
                        <CardHeader>{level}</CardHeader>
                        <CardBody>
                            <CardTitle style={{ fontSize: '2.5rem' }}>
                                ${amount} <small className="fg-3">/ mo</small>
                            </CardTitle>
                            <ul className="list-unstyled mt-5 mb-7">
                                {details.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <Button
                                className="w-100"
                                variant={index ? 'solid' : 'outline'}
                                theme="primary"
                                size="lg"
                            >
                                {action}
                            </Button>
                        </CardBody>
                    </Card>
                ))}
            </div>
            <footer className="pt-7 md:my-12 md:pt-12 border-top">
                <Row>
                    <Col xs={12} md="auto">
                        <img
                            style={{ width: '24px' }}
                            src="https://github.com/EasyWebApp.png"
                        />
                        <small className="d-block mb-5 fg-3">
                            © 2017-{new Date().getFullYear()}
                        </small>
                    </Col>
                    {foot_nav.map(item => (
                        <FooterList
                            key={item.title}
                            colSpan={12 / foot_nav.length}
                            {...item}
                        />
                    ))}
                </Row>
            </footer>
        </Container>
    </>
);
