import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Create the app, but also include the router to allow the routing component to work in the browser.
const app = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
