import { createCell, Fragment } from 'web-cell';
import { NavBar } from 'boot-cell/source/Navigator';
import { Button } from 'boot-cell/source/Form';
import { Card } from 'boot-cell/source/Content/Card';

import { FooterList } from '../../../component/FooterList';
import { prices } from './data';
import { footers } from '../Product/data';

export function PricingPage() {
    const foot_nav = [...footers];

    foot_nav.splice(-2, 1);

    return (
        <Fragment>
            <NavBar
                theme="light"
                background="light"
                brand="Company name"
                menu={[
                    { title: 'Features' },
                    { title: 'Enterprise' },
                    { title: 'Support' },
                    { title: 'Pricing' }
                ]}
            >
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
            <div class="container">
                <div class="card-deck mb-3 text-center">
                    {prices.map(({ level, amount, details, action }, index) => (
                        <Card
                            class="mb-4 shadow-sm"
                            header={
                                <h4 class="my-0 font-weight-normal">{level}</h4>
                            }
                            title={
                                <span style={{ fontSize: '2.5rem' }}>
                                    ${amount}{' '}
                                    <small class="text-muted">/ mo</small>
                                </span>
                            }
                        >
                            <ul class="list-unstyled mt-3 mb-4">
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
                <footer class="pt-4 my-md-5 pt-md-5 border-top">
                    <div class="row">
                        <div class="col-12 col-md">
                            <img
                                style={{ width: '24px' }}
                                src="https://web-cell.dev/WebCell-0.f1ffd28b.png"
                            />
                            <small class="d-block mb-3 text-muted">
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
        </Fragment>
    );
}
