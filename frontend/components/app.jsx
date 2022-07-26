import React from "react";
import { Routes, Route } from "react-router-dom";
import ImageGenerator from "./image_generator";
import Splash from "./splash/splash";

const App = () => (
    <div>
        {/* <ImageGenerator /> */}
        <Routes>
            <Route path="/" element={<Splash />}>
                {/* <Route path="images" element={ImageGenerator} /> */}
            </Route>
        </Routes>
    </div>
);

export default App;