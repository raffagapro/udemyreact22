import React from "react";
import Accord from "./Accord/Accord";
import { itemsAccord } from "../../utils";

const Hooks = () => {
    return (
        <div className="container mt-3 card">
            <h1>Widget App</h1>
            <Accord items={itemsAccord} />
        </div>
    );
};

export default Hooks;