import React from "react";
import "./style.css";


interface ButtonProps {
    isFull: boolean;
    isTrue?: boolean;
    isError: boolean;
    [x: string]: any;
    children?: React.ReactNode;
    disabled?: boolean;
}


const Button: React.FC<ButtonProps> = ({ children, isFull, isTrue, isError, ...rest }) => {
    return (
        <button
            {...rest}
            className={`btn loading-btn inherit-font ${isFull && "full-width"}  ${isTrue && "btn-green"
                }  ${!isTrue && isError && "btn-primary"}`}
        >
            {children}
        </button>
    );
}


export { Button };