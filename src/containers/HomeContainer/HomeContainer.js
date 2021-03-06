import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../../components/Product/Product';
import { withRouter } from 'react-router';
import Spinner from '../../components/UI/Spinner/Spinner';

class HomeContainer extends Component {

  navigateToProduct = (id) => {
    this.props.history.push(`/product/${id}`)
  }

  render() {
    return (
      <div className='container py-5'>
        <div className='row'>
          {this.props.products.loading ?
          <Spinner />
          : this.props.products.products?
            this.props.products.products.map(product => (
              <div 
                className='col-md-4 mb-3'
                key={product.id}>
                <Product
                  navigateToProduct={this.navigateToProduct}
                  product={product}/>
              </div>
            )) : null}
        </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}



export default connect(mapStateToProps)(HomeContainer);
