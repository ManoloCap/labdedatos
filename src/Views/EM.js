import React from "react";
//Bootstrap
import {ResponsiveEmbed
} from 'react-bootstrap';
const EM = () => {
    return (
        <React.Fragment>
            <div style= {{width: "100%", height: '100%'}} >
                <ResponsiveEmbed aspectRatio="16by9" style= {{width: "100%", height: '100%'}}>
                    <embed src="https://presupuestolabdedatosgt.herokuapp.com/" />
                </ResponsiveEmbed>
            </div>
        </React.Fragment>

)}

export default EM;