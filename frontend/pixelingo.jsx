import React from "react";
import ReactDOM from "react-dom";
// must set up to render app in "root"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome homedog</h1>, root)
});