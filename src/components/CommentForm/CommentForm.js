import React from 'react'
import Rating from 'react-rating';
import { Field, reduxForm } from 'redux-form';

const renderTextAreaField = (field) => {
  const className = `${field.meta.touched 
    && field.meta.error 
    ? 'form-group has-error' : 'form-group'}`

  return(
    <div className={className}>
      <label className='mb-2'>{field.label}</label>
      <textarea className='form-control' rows='3' name={field.name} type={field.type} {...field.input}/>
      <div className='error mt-2'>
        {field.meta.touched ? field.meta.error : ''}
      </div>
    </div>
  )
}

 const CommentForm = (props) => {
   const {handleSubmit} = props;
  return (
    <form
      className='d-flex flex-column'
      onSubmit={handleSubmit}>
      <Field 
        name='text'
        type='text'
        component={renderTextAreaField}
        label='Your review'/>
      <Rating 
        emptySymbol={<i className="far fa-star"></i>}
        fullSymbol={<i className="fas fa-star"></i>}
        onChange={props.chooseRate}/>
        <button className='btn btn-danger mt-3'>Add review</button>
    </form>
  )
}

export default reduxForm({
  form: 'comment-form'
})(CommentForm);