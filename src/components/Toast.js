import React from "react";

//styles
import  './Toast.css';
//Bootstrap
import {Container,
} 
from "react-bootstrap";
const Toast = props => {
    let toastContainer = {
        width: "100%",
        background: props.background,
        textAlign: "center",
        marginBottom: "0",
        display: (props.showToast ? 'block' : 'none'),
    }

    let toastText = {
        color: props.color,
        fontWeight: "bold",
    }

    return(
        <div style={toastContainer}>
            <p style={toastText}>{props.popUpMessage}</p>
        </div>
    
)};

export default Toast;