import React from "react";
import { Routes, Route } from "react-router-dom";
import ImageGenerator from "./image_generator";

const App = () => (
    <div>
        {/* <ImageGenerator /> */}
        <Routes>
            <Route path="/" element={<ImageGenerator />} />
        </Routes>
    </div>
);

export default App;