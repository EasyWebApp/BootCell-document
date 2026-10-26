import {
    Container,
    Row,
    Col,
    Badge,
    ListGroup,
    ListGroupItem,
    InputGroup,
    InputGroupText,
    FormControl,
    Button,
    FormField,
    FormCheck
} from 'boot-cell';

import * as style from './index.module.less';
import { cart_list, foot_links } from './data.json';

export default () => (
    <div className={`${style.box} bg-1`}>
        <Container>
            <div className="py-12 text-center">
                <img
                    className="d-block mx-auto mb-7"
                    style={{ width: '4.5rem' }}
                    src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg"
                />
                <h2>Checkout form</h2>
                <p className="fs-lg fw-light">
                    Below is an example form built entirely with Bootstrap’s
                    form controls. Each required form group has a validation
                    state that can be triggered by attempting to submit the form
                    without completing it.
                </p>
            </div>

            <Row>
                <Col md={4} className="md:order-2 mb-7">
                    <h4 className="d-flex justify-content-between align-items-center mb-5">
                        <span className="fg-3">Your cart</span>
                        <Badge bg="secondary" pill>
                            {cart_list.filter(({ code }) => !code).length}
                        </Badge>
                    </h4>
                    <ListGroup className="mb-5">
                        {cart_list.map(
                            ({ code, title, description, price }) => (
                                <ListGroupItem
                                    key={title}
                                    className={`d-flex justify-content-between ${code ? 'bg-1' : 'lh-condensed'}`}
                                >
                                    <div className={code ? 'fg-success' : ''}>
                                        <h6 className="my-0">{title}</h6>
                                        <small className="fg-3">
                                            {code || description}
                                        </small>
                                    </div>
                                    <span
                                        className={`fg-${
                                            code ? 'success' : '3'
                                        }`}
                                    >
                                        {code ? '-' : ''}${price}
                                    </span>
                                </ListGroupItem>
                            )
                        )}
                        <ListGroupItem className="d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>$20</strong>
                        </ListGroupItem>
                    </ListGroup>

                    <form className="card p-3">
                        <InputGroup>
                            <FormControl
                                name="promo_code"
                                required
                                placeholder="Promo code"
                            />
                            <Button
                                type="submit"
                                variant="solid"
                                theme="secondary"
                            >
                                Redeem
                            </Button>
                        </InputGroup>
                    </form>
                </Col>
                <Col md={8} className="md:order-1">
                    <h4 className="mb-5">Billing address</h4>
                    <form validate>
                        <Row>
                            <FormField
                                className="md:col-6 mb-5 m-0"
                                name="firstName"
                                required
                                label="First name"
                            />
                            <FormField
                                className="md:col-6 mb-5 m-0"
                                name="lastName"
                                required
                                label="Last name"
                            />
                        </Row>

                        <div className="mb-5">
                            <label htmlFor="username">Username</label>
                            <InputGroup>
                                <InputGroupText>@</InputGroupText>
                                <FormControl
                                    id="username"
                                    name="username"
                                    required
                                    placeholder="Username"
                                />
                            </InputGroup>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email">
                                Email <span className="fg-3">(Optional)</span>
                            </label>
                            <FormField
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                            />
                        </div>

                        <FormField
                            className="mb-5 m-0"
                            name="address"
                            required
                            label="Address"
                            placeholder="1234 Main St"
                        />
                        <div className="mb-5">
                            <label htmlFor="address2">
                                Address 2{' '}
                                <span className="fg-3">(Optional)</span>
                            </label>
                            <FormField
                                id="address2"
                                name="address2"
                                placeholder="Apartment or suite"
                            />
                        </div>

                        <Row>
                            <FormField
                                className="md:col-5 mb-5 m-0"
                                name="country"
                                required
                                label="Country"
                                as="select"
                            >
                                <option value="">Choose...</option>
                                <option>United States</option>
                            </FormField>

                            <FormField
                                className="md:col-4 mb-5 m-0"
                                name="state"
                                required
                                label="State"
                                as="select"
                            >
                                <option value="">Choose...</option>
                                <option>California</option>
                            </FormField>

                            <FormField
                                className="md:col-3 mb-5 m-0"
                                name="zip"
                                required
                                label="Zip"
                            />
                        </Row>
                        <hr className="mb-7" />

                        <FormCheck
                            type="checkbox"
                            name="same_address"
                            label="Shipping address is the same as my billing address"
                        />
                        <FormCheck
                            type="checkbox"
                            name="same_info"
                            label="Save this information for next time"
                        />
                        <hr className="mb-7" />

                        <h4 className="mb-5">Payment</h4>

                        <div className="d-block my-5">
                            <FormCheck
                                type="radio"
                                name="paymentMethod"
                                value="credit"
                                required
                                checked
                                label="Credit card"
                            />
                            <FormCheck
                                type="radio"
                                name="paymentMethod"
                                value="debit"
                                required
                                label="Debit card"
                            />
                            <FormCheck
                                type="radio"
                                name="paymentMethod"
                                value="paypal"
                                required
                                label="PayPal"
                            />
                        </div>

                        <Row>
                            <FormField
                                className="md:col-6 mb-5 m-0"
                                name="cc_name"
                                required
                                label="Name on card"
                            />
                            <FormField
                                className="md:col-6 mb-5 m-0"
                                name="cc_number"
                                required
                                label="Credit card number"
                            />
                        </Row>
                        <Row>
                            <FormField
                                className="md:col-3 mb-5 m-0"
                                name="cc_expiration"
                                required
                                label="Expiration"
                            />
                            <FormField
                                className="md:col-3 mb-5 m-0"
                                name="cc_cvv"
                                required
                                label="CVV"
                            />
                        </Row>
                        <hr className="mb-7" />

                        <Button
                            type="submit"
                            className="w-100"
                            variant="solid"
                            theme="primary"
                            size="lg"
                        >
                            Continue to checkout
                        </Button>
                    </form>
                </Col>
            </Row>

            <footer className="py-12 fg-3 text-center fs-sm">
                <p className="mb-1">© 2017-2020 Company Name</p>
                <ul className="list-inline m-0">
                    {foot_links.map(({ title }) => (
                        <li key={title} className="list-inline-item">
                            <a href="#">{title}</a>
                        </li>
                    ))}
                </ul>
            </footer>
        </Container>
    </div>
);
