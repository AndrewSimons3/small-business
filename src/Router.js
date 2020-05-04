import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Listings from './containers/Listings'
import Login from './components/Login'
import Add from './containers/Add'
import { checkAuth } from './checkAuth'
import ButtonAppBar from './components/NavBar'
import Details from './containers/Details'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const comp = Component
  return (
      <Route
      {...rest}
      render={(props) => checkAuth(comp) === true
          ? (<div><ButtonAppBar loggedIn={checkAuth()}/><Component {...props} loggedIn={checkAuth()} /></div>)
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
  )
}

const UnProtectedRoute = ({component: Component, ...rest}) => {
  return (
      <Route
      {...rest}
      render={(props) => 
         <div><ButtonAppBar loggedIn={checkAuth()}/><Component {...props} loggedIn={checkAuth()} /></div>
      }
      />
  )
}


const Router = () => {
  return (
      <Switch>
          <Route path="/login" component={Login} />
          <UnProtectedRoute path="/listing/:id" component={Details} />
          <UnProtectedRoute exact path="/" component={Listings} />
          <ProtectedRoute path="/add" component={Add} />
      </Switch>
  );
};

export default Router;