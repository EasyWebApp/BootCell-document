import { createCell, Fragment } from 'web-cell';
import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { NavLink } from 'boot-cell/source/Navigator/Nav';
import { Button } from 'boot-cell/source/Form/Button';
import { Card } from 'boot-cell/source/Content/Card';

import { FooterList } from '../../../component/FooterList';
import prices from './index.json';
import { footers } from '../Product/data';

export function PricingPage() {
    const foot_nav = [...footers];

    foot_nav.splice(-2, 1);

    return (
        <>
            <NavBar
                theme="light"
                background="light"
                menuAlign="end"
                brand="Company name"
            >
                <NavLink>Features</NavLink>
                <NavLink>Enterprise</NavLink>
                <NavLink>Support</NavLink>
                <NavLink>Pricing</NavLink>

                <Button outline>Sign up</Button>
            </NavBar>
            <div
                className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"
                style={{ maxWidth: '43.75rem' }}
            >
                <h1 className="display-4">Pricing</h1>
                <p className="lead">
                    Quickly build an effective pricing table for your potential
                    customers with this Bootstrap example. It’s built with
                    default Bootstrap components and utilities with little
                    customization.
                </p>
            </div>
            <div className="container">
                <div className="card-deck mb-3 text-center">
                    {prices.map(({ level, amount, details, action }, index) => (
                        <Card
                            className="mb-4 shadow-sm"
                            header={
                                <h4 className="my-0 font-weight-normal">
                                    {level}
                                </h4>
                            }
                            title={
                                <span style={{ fontSize: '2.5rem' }}>
                                    ${amount}{' '}
                                    <small className="text-muted">/ mo</small>
                                </span>
                            }
                        >
                            <ul className="list-unstyled mt-3 mb-4">
                                {details.map(item => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                            <Button outline={!index} block size="lg">
                                {action}
                            </Button>
                        </Card>
                    ))}
                </div>
                <footer className="pt-4 my-md-5 pt-md-5 border-top">
                    <div className="row">
                        <div className="col-12 col-md">
                            <img
                                style={{ width: '24px' }}
                                src="https://web-cell.dev/WebCell-0.f1ffd28b.png"
                            />
                            <small className="d-block mb-3 text-muted">
                                © 2017-{new Date().getFullYear()}
                            </small>
                        </div>
                        {foot_nav.map(item => (
                            <FooterList
                                colSpan={12 / foot_nav.length}
                                {...item}
                            />
                        ))}
                    </div>
                </footer>
            </div>
        </>
    );
}
