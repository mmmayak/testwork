import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import config from '../../helpers/config';
import { getComments } from '../../actions/comments/comments';
import Comment from '../Comment/Comment';

 class ProductContainer extends Component {

  componentDidMount(){
    this.props.onGetComments(this.props.match.params.id);
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

   render(){
    
    return (
      <div className='container py-5'>
        <div className='row align-items-center flex-column'>
          {this.filterProduct()}
          comment form
          {this.props.comments.comments ?
          this.props.comments.comments.map(comment => (
            <div 
              className='col-md-6 mb-2'
              key={comment.id}>
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
    onGetComments: (id) => dispatch(getComments(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductContainer));