import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './containers/Header';
import Footer from './containers/Footer';
import { BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
      <Router>
      <div className="app">
      <Header />
      <App />
      </div>
      <Footer />
      </Router>
    </Provider>
    
  </React.StrictMode>
);