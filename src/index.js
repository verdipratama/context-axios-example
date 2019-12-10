import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../src/styles/index.css';
import * as serviceWorker from './serviceWorker';

import Fetch from './components/Fetch';
import FetchContextProvider from './contexts/FetchContext';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>React Context API with Axios Example</h1>
          <FetchContextProvider>
            <Fetch />
          </FetchContextProvider>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
