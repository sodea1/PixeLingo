import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom";
import { store } from "./store/store";
import * as ReactDOMClient from 'react-dom/client';
import Test from "./components/test";

document.addEventListener("DOMContentLoaded", () => {
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const container = document.getElementById("root");
    const root = ReactDOMClient.createRoot(container);
    root.render(<Test store={store} />);
})