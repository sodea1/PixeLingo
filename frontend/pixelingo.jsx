import React from "react";
import { store } from "./store/store";
import * as ReactDOMClient from 'react-dom/client';
import ImageGenerator from "./components/image_generator";
import { getImage } from "./util/image_api_util";
import { translate } from "./util/translation_api_util";
import { logout, login, signup } from "./actions/session_actions";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.getImage = getImage;
    window.translate = translate;
    window.login = login;
    window.signup = signup;
    window.logout = logout;

    const container = document.getElementById("root");
    const root = ReactDOMClient.createRoot(container);
    root.render(<Root store={store} />);
});