import React from "react";

//styles
import  './Toast.css';
//Bootstrap
import {Container,
} 
from "react-bootstrap";
const Toast = props => {
    return(
        <div className={"toast-container"} style={{ display: (props.showToast ? 'block' : 'none') }}>
            <p className={"ToastText"}>{props.popUpMessage}</p>
        </div>
)};

export default Toast;