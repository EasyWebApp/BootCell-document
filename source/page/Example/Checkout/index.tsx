import {
    Container,
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
    <div className={`${style.box} bg-light`}>
        <Container>
            <div className="py-5 text-center">
                <img
                    className="d-block mx-auto mb-4"
                    style={{ width: '4.5rem' }}
                    src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg"
                />
                <h2>Checkout form</h2>
                <p className="lead">
                    Below is an example form built entirely with Bootstrap’s
                    form controls. Each required form group has a validation
                    state that can be triggered by attempting to submit the form
                    without completing it.
                </p>
            </div>

            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <Badge bg="secondary" pill>
                            {cart_list.filter(({ code }) => !code).length}
                        </Badge>
                    </h4>
                    <ListGroup className="mb-3">
                        {cart_list.map(
                            ({ code, title, description, price }) => (
                                <ListGroupItem
                                    key={title}
                                    className={`d-flex justify-content-between ${code ? 'bg-light' : 'lh-condensed'}`}
                                >
                                    <div className={code ? 'text-success' : ''}>
                                        <h6 className="my-0">{title}</h6>
                                        <small className="text-muted">
                                            {code || description}
                                        </small>
                                    </div>
                                    <span
                                        className={`text-${
                                            code ? 'success' : 'muted'
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

                    <form className="card p-2">
                        <InputGroup>
                            <FormControl
                                name="promo_code"
                                required
                                placeholder="Promo code"
                            />
                            <Button type="submit" variant="secondary">
                                Redeem
                            </Button>
                        </InputGroup>
                    </form>
                </div>
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Billing address</h4>
                    <form validate>
                        <div className="row">
                            <FormField
                                className="col-md-6 mb-3 m-0"
                                name="firstName"
                                required
                                label="First name"
                                invalidMessage="Valid first name is required."
                            />
                            <FormField
                                className="col-md-6 mb-3 m-0"
                                name="lastName"
                                required
                                label="Last name"
                                invalidMessage="Valid last name is required."
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="username">Username</label>
                            <InputGroup invalidMessage="Your username is required.">
                                <InputGroupText>@</InputGroupText>
                                <FormControl
                                    id="username"
                                    name="username"
                                    required
                                    placeholder="Username"
                                />
                            </InputGroup>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">
                                Email{' '}
                                <span className="text-muted">(Optional)</span>
                            </label>
                            <FormField
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                invalidMessage="Please enter a valid email address for shipping updates."
                            />
                        </div>

                        <FormField
                            className="mb-3 m-0"
                            name="address"
                            required
                            label="Address"
                            placeholder="1234 Main St"
                            invalidMessage="Please enter your shipping address."
                        />
                        <div className="mb-3">
                            <label htmlFor="address2">
                                Address 2{' '}
                                <span className="text-muted">(Optional)</span>
                            </label>
                            <FormField
                                id="address2"
                                name="address2"
                                placeholder="Apartment or suite"
                            />
                        </div>

                        <div className="row">
                            <FormField
                                className="col-md-5 mb-3 m-0"
                                is="select"
                                name="country"
                                required
                                label="Country"
                                invalidMessage="Please select a valid country."
                            >
                                <option value="">Choose...</option>
                                <option>United States</option>
                            </FormField>

                            <FormField
                                className="col-md-4 mb-3 m-0"
                                is="select"
                                name="state"
                                required
                                label="State"
                                invalidMessage="Please provide a valid state."
                            >
                                <option value="">Choose...</option>
                                <option>California</option>
                            </FormField>

                            <FormField
                                className="col-md-3 mb-3 m-0"
                                name="zip"
                                required
                                label="Zip"
                                invalidMessage="Zip code required."
                            />
                        </div>
                        <hr className="mb-4" />

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
                        <hr className="mb-4" />

                        <h4 className="mb-3">Payment</h4>

                        <div className="d-block my-3">
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

                        <div className="row">
                            <FormField
                                className="col-md-6 mb-3 m-0"
                                name="cc_name"
                                required
                                label="Name on card"
                                tips="Full name as displayed on card"
                                invalidMessage="Name on card is required"
                            />
                            <FormField
                                className="col-md-6 mb-3 m-0"
                                name="cc_number"
                                required
                                label="Credit card number"
                                invalidMessage="Credit card number is required"
                            />
                        </div>
                        <div className="row">
                            <FormField
                                className="col-md-3 mb-3 m-0"
                                name="cc_expiration"
                                required
                                label="Expiration"
                                invalidMessage="Expiration date required"
                            />
                            <FormField
                                className="col-md-3 mb-3 m-0"
                                name="cc_cvv"
                                required
                                label="CVV"
                                invalidMessage="Security code required"
                            />
                        </div>
                        <hr className="mb-4" />

                        <Button
                            type="submit"
                            className="w-100"
                            variant="primary"
                            size="lg"
                        >
                            Continue to checkout
                        </Button>
                    </form>
                </div>
            </div>

            <footer className="py-5 text-muted text-center text-small">
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
