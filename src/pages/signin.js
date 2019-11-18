import React from 'react';

class Signin extends React.Component{

    render(){
        return(
            <div className='Signin'>
                <div className="modal fade" id="modalSignin" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title h3 mb-3 font-weight-normal" id="exampleModalLabel">Please sign in</h1>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="form-signin">
                            <label htmlFor="inputEmail" className="sr-only">Email address</label>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                            <br/>
                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                            <br/>
                            <div className="checkbox mb-3">
                                <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div>
                            <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-outline-success">Signin</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Signin;