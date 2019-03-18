import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import config from '../../helpers/config';
import { getComments, addComment } from '../../actions/comments/comments';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';

 class ProductContainer extends Component {

  state = {
    chosenRate: null
  }

  componentDidMount(){
    this.props.onGetComments(this.props.match.params.id);
  }

  chooseRateHandler = (value) => {
    this.setState({
      chosenRate: value
    })
  }

  filterProduct = () => {
    if(this.props.products.products){
      let filteredProduct = this.props.products.products.find(el => el.id === Number(this.props.match.params.id));
      return (
        <div className='col-md-6 d-flex align-items-center flex-column'>
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
    let valuesToAdd = {
      rate: this.state.chosenRate,
      text: values.text
    }
    
    this.props.onAddComments(Number(this.props.match.params.id), valuesToAdd)
  }

   render(){
    
    return (
      <div className='container py-5'>
        <div className='row align-items-center flex-column'>
          {this.filterProduct()}
          <div className='col-md-6 my-3'>
            <div className='card p-2'>
              <CommentForm 
              chooseRate={this.chooseRateHandler}
              onSubmit={this.addReviewHandler}/>
            </div>
          </div>
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
      </div>
    )
   }
}


const mapStateToProps = state => {
  return {
    products: state.products,
    comments: state.comments
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onGetComments: (id) => dispatch(getComments(id)),
    onAddComments: (id, values) => dispatch(addComment(id, values))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductContainer));