import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Router from './Router'
import ButtonAppBar from './components/NavBar'



function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <ButtonAppBar />
      <Router />
    </BrowserRouter>
  </Provider>
  );
}

export default App;
