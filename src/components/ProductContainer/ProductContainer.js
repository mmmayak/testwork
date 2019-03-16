import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

 class ProductContainer extends Component {

  state = {
    product: null,
  }

  componentDidMount(){
    this.filterProduct();
    
  }
  componentDidUpdate(prevProps){
    if(prevProps.products.products !== this.props.products.products){
      this.filterProduct();
     }
  }

  filterProduct = () => {
    if(this.props.products.products){
      let filteredProduct = this.props.products.products.find(el => el.id === Number(this.props.match.params.id));
      this.setState({
        product: filteredProduct
      })

    }
  }

   render(){
     console.log(this.state.product)
    return (
      <div>
        Product
      </div>
    )
   }
}



export default withRouter(ProductContainer);