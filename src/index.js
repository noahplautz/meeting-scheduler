import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import SignIn from './views/SignInView/SignIn';
import Dashboard from './views/DashboardView/Dashboard';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";


ReactDOM.render((
  <BrowserRouter>
    {/* <App /> */}
    {/* <SignIn />*/}
    {<Dashboard />}
  </BrowserRouter>
  ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.unregister();
