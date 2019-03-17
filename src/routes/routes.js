import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import HomeContainer from '../containers/HomeContainer/HomeContainer';
import { getProducts } from '../actions/products/products';
import { connect } from 'react-redux';
import ProductContainer from '../components/ProductContainer/ProductContainer';
import { withRouter } from 'react-router';
import SignUpContainer from '../containers/SignUpContainer/SignUpContainer';

 class Routes extends Component {

  componentDidMount(){
    this.props.onGetProducts();
  }

   render(){
    return (
      <React.Fragment>
        <Header />
          <Switch>
            <Route path='/sign-up' exact component={SignUpContainer} />
            <Route path='/sign-in' exact component={SignUpContainer} />
            <Route path='/product/:id' exact component={ProductContainer}/>
            <Route path='/' exact component={HomeContainer}/>
          </Switch>
      </React.Fragment>
    )
   }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onGetProducts: () => dispatch(getProducts())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));