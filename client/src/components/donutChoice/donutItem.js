import React from "react";

export const DonutItem = props => (
    <li onClick={() => props.handleClick(props.donut_id)} className="list-group-item">
        {props.children}
    </li>
);