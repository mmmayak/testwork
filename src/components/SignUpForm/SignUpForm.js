import React from 'react'
import { Field, reduxForm } from 'redux-form';
import './SignUpForm.scss';

const renderField = (field) => {
  console.log(field)
  return (
    <div className='form-group'>
      <label className='mb-2'>{field.label}</label>
      <input type='text' className='form-control'/>
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
    </form>
  )
}

export default reduxForm({
  form: 'signup-form'
})(SignUpForm);
