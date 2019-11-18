import React from 'react';

class Checkout extends React.Component{

    render(){
        return(
            <div className='Checkout'>
                <div className="modal" id="modalCheckout" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title h3 mb-3 font-weight-normal" id="exampleModalLabel">Please sign in</h1>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="py-5 text-center">
                                <h2>Checkout form</h2>
                                <p className="lead">Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                                </div>

                                <div className="row">
                                <div className="col-md-4 order-md-2 mb-4">
                                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="text-muted">Your cart</span>
                                    <span className="badge badge-secondary badge-pill">3</span>
                                    </h4>
                                    <ul className="list-group mb-3">
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                        <h6 className="my-0">Product name</h6>
                                        <small className="text-muted">Brief description</small>
                                        </div>
                                        <span className="text-muted">$12</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                        <h6 className="my-0">Second product</h6>
                                        <small className="text-muted">Brief description</small>
                                        </div>
                                        <span className="text-muted">$8</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                        <h6 className="my-0">Third item</h6>
                                        <small className="text-muted">Brief description</small>
                                        </div>
                                        <span className="text-muted">$5</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between bg-light">
                                        <div className="text-success">
                                        <h6 className="my-0">Promo code</h6>
                                        <small>EXAMPLECODE</small>
                                        </div>
                                        <span className="text-success">-$5</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Total (USD)</span>
                                        <strong>$20</strong>
                                    </li>
                                    </ul>

                                    <form className="card p-2">
                                    <div className="input readOnly-group">
                                        <input readOnly type="text" className="form-control" placeholder="Promo code" />
                                        <div className="input readOnly-group-append">
                                        <br/>
                                        <button type="submit" className="btn btn-secondary">Redeem</button>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                <div className="col-md-8 order-md-1">
                                    <h4 className="mb-3">Billing address</h4>
                                    <form className="needs-validation" noValidate>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                        <label htmlFor="firstName">First name</label>
                                        <input readOnly type="text" className="form-control" id="firstName" placeholder="" value="" required />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                        <label htmlFor="lastName">Last name</label>
                                        <input readOnly type="text" className="form-control" id="lastName" placeholder="" value="" required />
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="username">Username</label>
                                        <div className="input readOnly-group">
                                        <div className="input readOnly-group-prepend">
                                            <span className="input readOnly-group-text">@</span>
                                        </div>
                                        <input readOnly type="text" className="form-control" id="username" placeholder="Username" required />
                                        <div className="invalid-feedback" >
                                            Your username is required.
                                        </div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                                        <input readOnly type="email" className="form-control" id="email" placeholder="you@example.com" />
                                        <div className="invalid-feedback">
                                        Please enter a valid email address htmlFor shipping updates.
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="address">Address</label>
                                        <input readOnly type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                        <div className="invalid-feedback">
                                        Please enter your shipping address.
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                                        <input readOnly type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                    </div>

                                    <div className="row">
                                        <div className="col-md-5 mb-3">
                                        <label htmlFor="country">Country</label>
                                        <select className="custom-select d-block w-100" id="country" required>
                                            <option value="">Choose...</option>
                                            <option>United States</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                        <label htmlFor="state">State</label>
                                        <select className="custom-select d-block w-100" id="state" required>
                                            <option value="">Choose...</option>
                                            <option>California</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                        <label htmlFor="zip">Zip</label>
                                        <input readOnly type="text" className="form-control" id="zip" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Zip code required.
                                        </div>
                                        </div>
                                    </div>
                                    <hr className="mb-4" />
                                    <div className="custom-control custom-checkbox">
                                        <input readOnly type="checkbox" className="custom-control-input readOnly" id="same-address" />
                                        <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input readOnly type="checkbox" className="custom-control-input readOnly" id="save-info" />
                                        <label className="custom-control-label" htmlFor="save-info">Save this information htmlFor next time</label>
                                    </div>
                                    <hr className="mb-4" />

                                    <h4 className="mb-3">Payment</h4>

                                    <div className="d-block my-3">
                                        <div className="custom-control custom-radio">
                                        <input readOnly id="credit" name="paymentMethod" type="radio" className="custom-control-input readOnly" checked required />
                                        <label className="custom-control-label" htmlFor="credit">Credit card</label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                        <input readOnly id="debit" name="paymentMethod" type="radio" className="custom-control-input readOnly" required />
                                        <label className="custom-control-label" htmlFor="debit">Debit card</label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                        <input readOnly id="paypal" name="paymentMethod" type="radio" className="custom-control-input readOnly" required />
                                        <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                        <label htmlFor="cc-name">Name on card</label>
                                        <input readOnly type="text" className="form-control" id="cc-name" placeholder="" required />
                                        <small className="text-muted">Full name as displayed on card</small>
                                        <div className="invalid-feedback">
                                            Name on card is required
                                        </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                        <label htmlFor="cc-number">Credit card number</label>
                                        <input readOnly type="text" className="form-control" id="cc-number" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 mb-3">
                                        <label htmlFor="cc-expiration">Expiration</label>
                                        <input readOnly type="text" className="form-control" id="cc-expiration" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Expiration date required
                                        </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                        <label htmlFor="cc-expiration">CVV</label>
                                        <input readOnly type="text" className="form-control" id="cc-cvv" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Security code required
                                        </div>
                                        </div>
                                    </div>
                                    <hr className="mb-4" />
                                    <button className="btn btn-outline-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                        </div>                       
                            <footer className="my-5 pt-5 text-muted text-center text-small">
                                <p className="mb-1">&copy; 2017-2018 Company Name</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a href='a'>Privacy</a></li>
                                    <li className="list-inline-item"><a href='a'>Terms</a></li>
                                    <li className="list-inline-item"><a href='a'>Support</a></li>
                                </ul>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
      
        );
    }
}

export default Checkout;
