import React from "react";
import "./donutChoice.css";

export const DonutChoice = ({ children }) => {
    return (
        <div className="list-overflow-container menu">
        <ul className="list-group">
            {children}
        </ul>
        </div>
    );
}