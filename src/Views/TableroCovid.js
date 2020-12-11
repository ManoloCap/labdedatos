import React from "react";
//Bootstrap
import {ResponsiveEmbed,
        Container
} from 'react-bootstrap';
const TableroCovid = () => {
    return (
        <React.Fragment>
            <Container fluid className="w-100" style= {{width: "100%", height: '100%'}}>
                <ResponsiveEmbed aspectRatio="16by9" style= {{width: "100%", height: '100%'}}>
                    <embed src="https://covidgtoc.herokuapp.com/" />
                </ResponsiveEmbed>
                </Container>
        </React.Fragment>

)}

export default TableroCovid;