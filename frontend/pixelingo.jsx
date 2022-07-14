import React from "react";
import { store } from "./store/store";
import * as ReactDOMClient from 'react-dom/client';
import ImageGenerator from "./components/image_generator";
import { getImage } from "./util/photo_api_util";

document.addEventListener("DOMContentLoaded", () => {
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.getImage = getImage;

    const container = document.getElementById("root");
    const root = ReactDOMClient.createRoot(container);
    root.render(<ImageGenerator store={store} />);
});