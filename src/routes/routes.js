import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import HomeContainer from '../containers/HomeContainer/HomeContainer';

 const Routes = () => {
  return (
    <React.Fragment>
      <Header />
      <Route path='/' exact component={HomeContainer}/>
    </React.Fragment>
  )
}


export default Routes;