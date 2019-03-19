import React from 'react'
import { Field, reduxForm } from 'redux-form';
import './SignUpForm.scss';
import Spinner from '../UI/Spinner/Spinner';

const renderField = (field) => {
  return (
    <div className='form-group'>
      <label className='mb-2'>{field.label}</label>
      <input name={field.name} type={field.type} {...field.input} className='form-control'/>
        {field.meta.touched ? 
          <div className='error mt-2'>{field.meta.error}</div> : ''}
    </div>
  )
}

 const SignUpForm = (props) => {
   const { handleSubmit } = props;
  let form;
  if(props.signup.loading) {
    form = <Spinner />
  }else {
    form = <form 
    onSubmit={handleSubmit}
    className='mt-5 p-3 signupForm'>
    <Field 
      name='username'
      type='text'
      component={renderField}
      label='Username'/>
      <Field 
      name='password'
      type='password'
      component={renderField}
      label='Password'/>
      {props.signup.error ?
      <p className='error mb-2'>{props.signup.error}</p> : null}
      <button type="submit" className="btn btn-danger">Sign up</button>
  </form>
  }
  return (
   <React.Fragment>
     {form}
   </React.Fragment>
  )
}

const validate = (values) => {
  const errors = {};

  if(!values.username){
    errors.username = 'Username is required';
  }
  if(!values.password){
    errors.password = 'Password is required';
  }
  return errors;
}

export default reduxForm({
  form: 'signup-form',
  validate
})(SignUpForm);
