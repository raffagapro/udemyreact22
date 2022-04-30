import React from "react";
import { Route, Routes } from "react-router-dom";
import Comments from "./components/CommentCard/Comments";
import Cars from "./components/Cars/Cars";
import Hooks from "./components/Hooks/Hooks";

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Hooks />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/cars" element={<Cars />} />
        </Routes>
    );
}

export default App;