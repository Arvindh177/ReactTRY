import React from "react";
import ReactDOM from 'react-dom';
var HelloWorld = require('./components/HelloWorld');

ReactDOM.render(
    <React.StrictMode>
        <HelloWorld />
        </React.StrictMode>,
    document.getElementById('root')  
);