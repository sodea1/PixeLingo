import React from "react";
import { Routes, Route } from "react-router-dom";
import ImageGenerator from "./image_generator";
import Splash from "./splash";

const App = () => (
    <div>
        {/* <ImageGenerator /> */}
        <Routes>
            <Route path="/" element={<Splash />}>
            </Route>
            <Route path="/images" element={<ImageGenerator />}/>
        </Routes>
    </div>
);

export default App;