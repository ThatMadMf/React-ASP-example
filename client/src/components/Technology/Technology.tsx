import React from "react";
import TechnologyModel from "./Technology.model";

function Technology({id, name} : TechnologyModel ) {
    return (
        <div key={id}>
            <h3>Technology name:</h3>
            <strong>{name}</strong>
        </div>
    );
}

export default Technology;