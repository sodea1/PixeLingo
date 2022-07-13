import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom";
import { setupStore } from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    // v18-
    // ReactDOM.render(<h1>Welcome homedog</h1>, root)
    // v18+
    const store = setupStore;
    window.getState = store.getState();
    window.dispatch = store.dispatch();
    const reactRoot = createRoot(root);
    reactRoot.render(<h1>Welcome homedog</h1>);
})