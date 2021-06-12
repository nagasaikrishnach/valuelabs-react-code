import React from 'react';
import { render } from 'react-dom';

import Home from "./home/home";
import "./index.scss";

import interceptor from './services/interceptor';

interceptor.axiosInterceptor();

const App = () => {
    return ( <Home /> ); 
}

render(<App />, document.getElementById('root'));