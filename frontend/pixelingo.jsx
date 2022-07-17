import React from "react";
import { store } from "./store/store";
import * as ReactDOMClient from 'react-dom/client';
import ImageGenerator from "./components/image_generator";
import { getImage } from "./util/image_api_util";
import { translate } from "./util/translation_api_util";

document.addEventListener("DOMContentLoaded", () => {
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.getImage = getImage;
    window.translate = translate;

    const container = document.getElementById("root");
    const root = ReactDOMClient.createRoot(container);
    root.render(<ImageGenerator store={store} />);
});