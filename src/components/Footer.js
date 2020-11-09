import React from "react";


// Resources
import { Facebook, Twitter } from 'react-feather';

//Bootstrap
import {Container,
        Row,
        Col,
} from 'react-bootstrap';


const Footer = () => {

    return(
        <React.Fragment>
            <footer>
                <Container>
                    <Row>
                        <Col className="mt-3 my-3">
                        <Facebook/>
                        <Twitter/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>laboratoriodedatosgt@gmail.com </Col>
                    </Row>
                    <Row>
                        <Col>Cel: +502 4602-1212 </Col>
                    </Row>
                    <Row>
                        <Col>Dashboard y análisis por Oscar Chávez </Col>
                    </Row>
                    <Row>
                        <Col>Fuente: Gobierno de Guatemala y covid.ourworldindata.org</Col>
                    </Row>
                </Container>
            </footer>          
        </React.Fragment>
    )
}

export default Footer;