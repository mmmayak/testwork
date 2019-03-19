import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import HomeContainer from '../containers/HomeContainer/HomeContainer';
import { getProducts } from '../actions/products/products';
import { connect } from 'react-redux';
import ProductContainer from '../components/ProductContainer/ProductContainer';
import { withRouter } from 'react-router';
import SignUpContainer from '../containers/SignUpContainer/SignUpContainer';
import SignInContainer from '../containers/SignInContainer/SignInContainer';
import { logout, authCheckState } from '../actions/signin/signin';

 class Routes extends Component {

  componentDidMount(){
    this.props.onTryAutoLogin();
    this.props.onGetProducts();
  }

  logoutHandler = () => {
    this.props.onLogoutUser();
    this.props.history.push('/sign-in')
  }

   render(){
    return (
      <React.Fragment>
        <Header 
          logout={this.logoutHandler}
          isAuth={this.props.isAuth}/>
          <Switch>
            <Route path='/sign-up' exact component={SignUpContainer} />
            <Route path='/sign-in' exact component={SignInContainer} />
            <Route path='/product/:id' exact component={ProductContainer}/>
            <Route path='/' exact component={HomeContainer}/>
          </Switch>
      </React.Fragment>
    )
   }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    isAuth: state.signin.isAuth
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onGetProducts: () => dispatch(getProducts()),
    onLogoutUser: () => dispatch(logout()),
    onTryAutoLogin: () => dispatch(authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));