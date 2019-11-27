import React from 'react';
import Header from './components/common/header'
import './reset.css'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter,Route } from "react-router-dom";
import Home from './components/home'
import Detail from './components/detail'

function App() {
  return (
    <Provider store={store}>

        <BrowserRouter>
        <Header />
        <div>
          <Route path='/detail' exact component={Detail}></Route>
          <Route path='/' exact  component={Home}></Route>
        </div> 
        </BrowserRouter>

    </Provider>

  );
}

export default App;
