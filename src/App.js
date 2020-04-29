import React from 'react';
import './App.css';
import ButtonAppBar from './components/NavBar';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
      <Login></Login>
    </div>
  );
}

export default App;
