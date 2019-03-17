import React, { Component } from 'react'
import './SignUpContainer.scss';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { connect } from 'react-redux';
import { signUp } from '../../actions/signup/signup';
import { withRouter } from 'react-router';

 class SignUpContainer extends Component {

  handleSignUp = (values) => {
    this.props.onSignUpUser(values, this.props.history)
  }

  render() {
    return (
      <div className='signup'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-5'>
            <SignUpForm 
              onSubmit={this.handleSignUp}
              />
            </div>
           
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    signup: state.signup
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignUpUser: (values, history) => dispatch(signUp(values, history))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpContainer));