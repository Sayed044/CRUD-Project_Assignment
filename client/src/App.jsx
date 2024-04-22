import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllFood from "./pages/AllFood.jsx";
import CreateFood from "./pages/CreateFood.jsx";
import UpdateFood from "./pages/UpdateFood.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllFood/>}/>
                <Route path="/CreateFood" element={<CreateFood/>}/>
                <Route path="/UpdateFood/:id" element={<UpdateFood/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;