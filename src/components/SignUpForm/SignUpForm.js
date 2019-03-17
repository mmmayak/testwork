import React from 'react'
import { Field, reduxForm } from 'redux-form';
import './SignUpForm.scss';

const renderField = (field) => {
  return (
    <div className='form-group'>
      <label className='mb-2'>{field.label}</label>
      <input name={field.name} type={field.type} {...field.input} className='form-control'/>
     
        {field.meta.touched ? 
          <div className='error'>{field.meta.error}</div> : ''}
    </div>
  )
}

 const SignUpForm = (props) => {
   const { handleSubmit } = props;

  return (
    <form 
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
        <button type="submit" className="btn btn-success">Sign up</button>
    </form>
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
