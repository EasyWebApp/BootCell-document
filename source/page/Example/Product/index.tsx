import { createCell, Fragment } from 'web-cell';
import { Nav } from 'boot-cell/source/Navigator/Nav';
import { Button } from 'boot-cell/source/Form/Button';

import { Case } from './Case';
import { FooterList } from './FooterList';

import style from './index.less';
import { headers, products, footers } from './data';

export function ProductPage() {
    const logo = (
        <img
            style={{ width: '24px' }}
            src="https://web-cell.dev/WebCell-0.f1ffd28b.png"
        />
    );
    return (
        <Fragment>
            <nav className="bg-dark sticky-top py-1">
                <Nav
                    className="container text-light"
                    align="between"
                    list={[
                        {
                            title: logo
                        },
                        ...headers
                    ]}
                />
            </nav>
            <header className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 font-weight-normal">Punny headline</h1>
                    <p class="lead font-weight-normal">
                        And an even wittier subheading to boot. Jumpstart your
                        marketing efforts with this example based on Apple’s
                        marketing pages.
                    </p>
                    <Button outline kind="secondary" href="#">
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
                    <div class="col-12 col-md">
                        {logo}
                        <small class="d-block mb-3 text-muted">
                            © 2019-{new Date().getFullYear()}
                        </small>
                    </div>
                    {footers.map(FooterList)}
                </div>
            </footer>
        </Fragment>
    );
}
