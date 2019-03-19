import React, { Component } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { connect } from 'react-redux';
import { signUp } from '../../actions/signup/signup';
import { withRouter } from 'react-router';
import SignInForm from '../../components/SignInForm/SignInForm';
import './SignInContainer.scss';
import { signIn } from '../../actions/signin/signin';
import Spinner from '../../components/UI/Spinner/Spinner';

 class SignInContainer extends Component {

  handleSignIn = (values) => {
    this.props.onSignInUser(values, this.props.history)
  }

  render() {
    
    
    return (
      <div className='signin'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-5'>
            {this.props.signin.loading ?
              <Spinner />
              :
              <SignInForm 
              signInError={this.props.signin.error}
              onSubmit={this.handleSignIn}
              />
            }
            
            </div>
           
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    signin: state.signin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignInUser: (values, history) => dispatch(signIn(values, history))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInContainer));