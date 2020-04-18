import React from 'react'
import { Route, Switch } from 'react-router-dom'
 
import Header from '../header'
// import Spinner from '../spinner'
import withBookstoreService from '../hoc/with-bookstore-service'
import { HomePage, CartPage } from '../pages'

import "./app.css"

function App({bookstoreService}) {
  return (
    <main  role="main" className='container'>
    <Header numItems={2} total={232}/>
      <Switch>
        {/* <Spinner/> */}
        <Route 
          path="/"
          render={HomePage} 
          exact>
        </Route>
        <Route path="/Cart" render={CartPage} exact></Route>
        <Route render={() => {
          return  <h2> Page not found</h2>
        }} />
      </Switch>
    </main>
  );
}

export default withBookstoreService()(App);
