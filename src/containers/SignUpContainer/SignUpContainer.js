import React, { Component } from 'react'
import './SignUpContainer.scss';
import SignUpForm from '../../components/SignUpForm/SignUpForm';


 class SignUpContainer extends Component {
  render() {
    return (
      <div className='signup'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-5'>
            <SignUpForm 
              />
            </div>
           
          </div>
        </div>
      </div>
    )
  }
}

export default SignUpContainer;