import React from 'react';

class Signin extends React.Component{

    render(){
        return(
            <div className='Signin'>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title h3 mb-3 font-weight-normal" id="exampleModalLabel">Please sign in</h1>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form class="form-signin">
                            <label for="inputEmail" class="sr-only">Email address</label>
                            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                            <br/>
                            <label for="inputPassword" class="sr-only">Password</label>
                            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                            <br/>
                            <div class="checkbox mb-3">
                                <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div>
                            <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-outline-success">Signin</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Signin;