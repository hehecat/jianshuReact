import React from 'react';
import Header from './components/common/header'
import './reset.css'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
      </div>
    </Provider>

  );
}

export default App;
