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
          <div 
        style={{
          width: '300px',
          height: '300px'
        }}>
        <img src={`${config.url}static/${filteredProduct.img}`} 
          alt="product"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}/>
      </div>
          <h3>{filteredProduct.title}</h3>
          <p>{filteredProduct.text}</p>
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

          <Comment
            comments={this.props.comments}/>
        </div>
      </div>
    )
   }
}


const mapStateToProps = state => {
  console.log(state.comments)
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