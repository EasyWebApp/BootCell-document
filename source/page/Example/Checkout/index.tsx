import { createCell } from 'web-cell';
import classNames from 'classnames';

import { Badge } from 'boot-cell/source/Reminder/Badge';
import { ListGroup, ListItem } from 'boot-cell/source/Content/ListGroup';
import { InputGroup } from 'boot-cell/source/Form/InputGroup';
import { Button } from 'boot-cell/source/Form/Button';
import { Form } from 'boot-cell/source/Form/Form';
import { FormField } from 'boot-cell/source/Form/FormField';
import { ToggleField } from 'boot-cell/source/Form/ToggleField';

import style from './index.less';
import { cart_list, foot_links } from './data.json';

export function CheckoutPage() {
    return (
        <div className={classNames(style.box, 'bg-light')}>
            <div className="container">
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
                        state that can be triggered by attempting to submit the
                        form without completing it.
                    </p>
                </div>

                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your cart</span>
                            <Badge kind="secondary" pill>
                                {cart_list.filter(({ code }) => !code).length}
                            </Badge>
                        </h4>
                        <ListGroup className="mb-3">
                            {cart_list.map(
                                ({ code, title, description, price }) => (
                                    <ListItem
                                        className={classNames(
                                            'd-flex',
                                            'justify-content-between',
                                            code ? 'bg-light' : 'lh-condensed'
                                        )}
                                    >
                                        <div
                                            className={classNames(
                                                code && 'text-success'
                                            )}
                                        >
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
                                    </ListItem>
                                )
                            )}
                            <ListItem className="d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>$20</strong>
                            </ListItem>
                        </ListGroup>

                        <form className="card p-2">
                            <InputGroup
                                name="promo_code"
                                placeholder="Promo code"
                                append={
                                    <Button type="submit" kind="secondary">
                                        Redeem
                                    </Button>
                                }
                            />
                        </form>
                    </div>
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Billing address</h4>
                        <Form validate>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <FormField
                                        className="m-0"
                                        name="firstName"
                                        required
                                        label="First name"
                                    />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <FormField
                                        className="m-0"
                                        name="lastName"
                                        required
                                        label="Last name"
                                    />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="username">Username</label>
                                <InputGroup
                                    id="username"
                                    name="username"
                                    required
                                    prepend="@"
                                    placeholder="Username"
                                />
                                <div className="invalid-feedback w-100">
                                    Your username is required.
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="email">
                                    Email{' '}
                                    <span className="text-muted">
                                        (Optional)
                                    </span>
                                </label>
                                <FormField
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for
                                    shipping updates.
                                </div>
                            </div>

                            <div className="mb-3">
                                <FormField
                                    className="m-0"
                                    name="address"
                                    required
                                    label="Address"
                                    placeholder="1234 Main St"
                                />
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="address2">
                                    Address 2{' '}
                                    <span className="text-muted">
                                        (Optional)
                                    </span>
                                </label>
                                <FormField
                                    id="address2"
                                    name="address2"
                                    placeholder="Apartment or suite"
                                />
                            </div>

                            <div className="row">
                                <div className="col-md-5 mb-3">
                                    <FormField
                                        className="m-0"
                                        is="select"
                                        name="country"
                                        required
                                        label="Country"
                                    >
                                        <option value="">Choose...</option>
                                        <option>United States</option>
                                    </FormField>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <FormField
                                        className="m-0"
                                        is="select"
                                        name="state"
                                        required
                                        label="State"
                                    >
                                        <option value="">Choose...</option>
                                        <option>California</option>
                                    </FormField>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <FormField
                                        className="m-0"
                                        name="zip"
                                        required
                                        label="Zip"
                                    />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>
                            <hr className="mb-4" />
                            <ToggleField type="checkbox" name="same_address">
                                Shipping address is the same as my billing
                                address
                            </ToggleField>
                            <ToggleField type="checkbox" name="same_info">
                                Save this information for next time
                            </ToggleField>
                            <hr className="mb-4" />

                            <h4 className="mb-3">Payment</h4>

                            <div className="d-block my-3">
                                <ToggleField
                                    type="radio"
                                    name="paymentMethod"
                                    value="credit"
                                    required
                                    checked
                                >
                                    Credit card
                                </ToggleField>
                                <ToggleField
                                    type="radio"
                                    name="paymentMethod"
                                    value="debit"
                                    required
                                >
                                    Debit card
                                </ToggleField>
                                <ToggleField
                                    type="radio"
                                    name="paymentMethod"
                                    value="paypal"
                                    required
                                >
                                    PayPal
                                </ToggleField>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <FormField
                                        className="m-0"
                                        name="cc_name"
                                        required
                                        label="Name on card"
                                    />
                                    <small className="text-muted">
                                        Full name as displayed on card
                                    </small>
                                    <div className="invalid-feedback">
                                        Name on card is required
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <FormField
                                        className="m-0"
                                        name="cc_number"
                                        required
                                        label="Credit card number"
                                    />
                                    <div className="invalid-feedback">
                                        Credit card number is required
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <FormField
                                        className="m-0"
                                        name="cc_expiration"
                                        required
                                        label="Expiration"
                                    />
                                    <div className="invalid-feedback">
                                        Expiration date required
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <FormField
                                        className="m-0"
                                        name="cc_cvv"
                                        required
                                        label="CVV"
                                    />
                                    <div className="invalid-feedback">
                                        Security code required
                                    </div>
                                </div>
                            </div>
                            <hr className="mb-4" />
                            <Button block size="lg" type="submit">
                                Continue to checkout
                            </Button>
                        </Form>
                    </div>
                </div>

                <footer className="pt-5 text-muted text-center text-small">
                    <p className="mb-1">© 2017-2020 Company Name</p>
                    <ul className="list-inline m-0">
                        {foot_links.map(({ title }) => (
                            <li className="list-inline-item">
                                <a href="#">{title}</a>
                            </li>
                        ))}
                    </ul>
                </footer>
            </div>
        </div>
    );
}
