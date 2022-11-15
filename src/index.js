import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css' ;
import 'bootstrap/dist/js/bootstrap.bundle.min.js' ;
import 'jquery/dist/jquery.min.js' ;
import '@fortawesome/fontawesome-free/css/all.min.css' ;

import './style/index.css' ;
import './style/small-media.css' ;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <App />
);
