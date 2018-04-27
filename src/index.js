// @flow
import "./styles/global.scss";

import "babel-polyfill";

import React from "react";
import {render} from "react-dom";

import App from "app/components/App";

const root = document.getElementById("root");

if (root) {
    render(
        <App/>,
        root
    );
}

if (navigator.serviceWorker) {
    window.addEventListener("load", () => {
        // $FlowFixMe
        navigator.serviceWorker.register("/service-worker.js")
            .then(registration => {
                console.log("SW registered: ", registration);
                if (process.env.NODE_ENV === "development") {
                    console.log("Make sure you have 'Upload on reload' checked (Chrome Dev Tools -> Application -> Service Workers) for correct hot reload");
                }
            })
            .catch(error => console.log("SW registration failed: ", error));
    });
}
