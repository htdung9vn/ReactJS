import React from 'react';

class Footer extends React.Component{

    render(){
        return(
            <div className='Footer'>
                <div className='container'>
                    <div class="alert alert-dark" role="alert">
                    <h4 class="alert-heading">Author
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </h4>
                    <div className='row'>
                        <div className='col'>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">Name</li>
                            <li class="list-group-item">Age</li>
                            <li class="list-group-item">Locate</li>
                            <li class="list-group-item">Phone number</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">Hoang tien Dung</li>
                            <li class="list-group-item">20</li>
                            <li class="list-group-item">Ho Chi Minh City</li>
                            <li class="list-group-item">+84384256135</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;