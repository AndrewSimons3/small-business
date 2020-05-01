import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listings from './components/Listings'
import Login from './components/Login'
import Add from './components/Add'

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
      <Route
      {...rest}
      render={(props) => checkAuth() === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
  )
}

const Router = () => {
  return (
      <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Listings} />
          <ProtectedRoute path="/add" component={Add} />
      </Switch>
  );
};

export default Router;