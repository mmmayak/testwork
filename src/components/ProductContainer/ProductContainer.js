import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import config from '../../helpers/config';
import { getComments, addComment } from '../../actions/comments/comments';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import Spinner from '../UI/Spinner/Spinner';
import {reset} from 'redux-form';

 class ProductContainer extends Component {

  state = {
    chosenRate: null,
    fillError: false
  }

  componentDidMount(){
    this.props.onGetComments(this.props.match.params.id);
  }

  chooseRateHandler = (value) => {
    this.setState({
      chosenRate: value,
      fillError: false
    })
  }

  filterProduct = () => {
    if(this.props.products.products){
      let filteredProduct = this.props.products.products.find(el => el.id === Number(this.props.match.params.id));
      return (
        <div className='col-md-6 d-flex align-items-center flex-column mb-2'>
          <div className='card' style={{width: '100%'}}>
            <img src={`${config.url}static/${filteredProduct.img}`} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>{filteredProduct.title}</h5>
              <p className='card-text'>{filteredProduct.text}</p>
            </div>
          </div>
      </div>
      )
    }
  }
  
  addReviewHandler = (values) => {
    if(!values.text || !this.state.chosenRate){
      this.setState({
        fillError: true
      })
    }
    let valuesToAdd = {
      rate: this.state.chosenRate,
      text: values.text
    }
    
    this.props.onAddComments(Number(this.props.match.params.id), valuesToAdd);
    this.props.onReset();
  }

   render(){
    let commentForm;
    if(this.props.comments.loading){
      commentForm = <Spinner />
    }else{
      commentForm = <div className='row align-items-center flex-column'>
          {this.filterProduct()}
          {this.props.isAuth ?
          <div className='col-md-6 mb-2'>
            <div className='card p-2'>
            <CommentForm 
            fillError={this.state.fillError}
            chooseRate={this.chooseRateHandler}
            onSubmit={this.addReviewHandler}/>
            </div>
          </div> : null}            
          {this.props.comments.comments ?
          this.props.comments.comments.map((comment, index) => (
            <div 
              className='col-md-6 mb-2'
              key={index}>
              <Comment
                comment={comment}/>
            </div>
          ))
          :null
          }
        </div>
    }
    return (
      <div className='container py-5'>
        {commentForm}
      </div>
    )
   }
}


const mapStateToProps = state => {
  return {
    products: state.products,
    comments: state.comments,
    isAuth: state.signin.isAuth
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onGetComments: (id) => dispatch(getComments(id)),
    onAddComments: (id, values) => dispatch(addComment(id, values)),
    onReset: () => dispatch(reset('comment-form'))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductContainer));