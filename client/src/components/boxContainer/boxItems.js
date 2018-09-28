import React from "react";

export const BoxItems = props => (
    <div className="card" onClick={() => props.removeDonut(props.id)}>
        <div className="img-container remove">
            {props.children}
        </div>
    </div>
);
