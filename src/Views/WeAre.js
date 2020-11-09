import React from "react";


// Resources
import imageFill from "../images/token.png";

//Bootstrap
import {Container,
    Row,
    Col,
    Card,
    Button,
} from 'react-bootstrap';

const weAreItems = [
    { imageSrc: imageFill,
      key: "KARIN",
      name: 'KARIN SLOWING UMAÑA', 
      message: "Medica y cirujana con Maestría en Salud Pública para paises en Desarrollo. Consultora nacional e internacional en temas de gestión pública y políticas de desarrollo, con énfasis en salud."
    },
    { imageSrc: imageFill,
        name: 'OSCAR CHÁVEZ VALDEZ', 
        key: "OSCAR",
        message: "Ingeniero en Robótica, Analista de Negocios y de Datos con Maestría en Administración Pública. Experiencia en proyectos e inestigación en sociedad civil."
    },
    { imageSrc: imageFill,
        name: 'ALBERTO SIBRIÁN VALLE',
        key: "ALBERTO",
        message: "Economista, Analista de Riesgos con experiencia en implementación de estrategias financieras, de comunicación y cumplimiento."
    },
    { imageSrc: imageFill,
        name: 'CARLOS DUARTE CARRANZA',
        key: "CARLOS",
        message: "Ingeniero en SIstemas, Postgrado Internacional en Sistemas de Información Geográfica y Teledetección Espacial. Investigador asociado al instituto de inestigación y Protección en Ambiente y Sociedad."
    },
    { imageSrc: imageFill,
        name: 'ENRIQUE MALDONADO',
        key: "ENRIQUE",
        message: "Economista, especializado en temas de política social y fiscal. Consultor e investigador en temas de inversión pública, políticas y presupuesto público y derechos humanos."
    },
  ]

      // IAm Component
      const IAm = props => {
        return(
            <Container key={props.id}>
                <Row className="justify-content-md-center">
                <Col>
                   <img src={imageFill} />
                </Col>
                </Row>
                <Row className="justify-content-md-center">
                <Col className="textColorHeader">
                    {props.name}
                </Col>
                </Row>
                <Row className="text-justify">
                <Col>
                    {props.message}
                </Col>
                </Row>
            </Container>
    )}

    // WeAre Component
    const WeList = () => {
        return(
        <Container className="mt-3 my-3">
            <p className="sectionHeader">¿QUIÉNES SOMOS?</p>
            <Row>
                {weAreItems.map((i) => (
                    <Col lg="4" sm="6" key={i.key}>
                        <IAm
                            
                            imgSrc={i.imageSrc}
                            name={i.name}
                            message={i.message}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )}

const WeAre = () => {

    return(
        <React.Fragment>
            <header>
                <Container fluid>
                <Card border="light">
                    <Card.Body className="containerMargins">
                        <Card.Title className="sectionHeader">LAS PRUEBAS SON EL <br/> CONTROL DE EPIDEMIAS 101</Card.Title>
                        <Card.Text className="textHeader">
                        EL RETO PARA GUATEMALA 
                        </Card.Text>
                        <Card.Text className="labText">
                        Algunos países informan la cantidad de personas evaluadas, mientras que otros informan la cantidad de pruebas realizadas. Estos dos números puedne ser diferentes porque la misma persona puede realizarse la prueba más de una vez. En Guatemala, simplemente no sabemos qué dato es el que aportan.
                        </Card.Text>
                        <Card.Text className="labText">
                        En la siguiente nota explicamos más sobre el problema de las pruebas para Guatemala:
                        </Card.Text>
                        <Card.Text className="labText">
                        HAZ CLICK AQUÍ -> <b>Fuentes oficiales discrepan sobre la cantidad de pruebas realizadas en Guatemala</b>
                        </Card.Text>
                        <Card.Text className="textHeader">
                        CUANTAS PRUEBAS DEBERÍAMOS ESTAR HACIENDO
                        </Card.Text>
                        <Card.Text className="labText">
                        Una mayor cantidad de pruebas permite entender mejor la calidad, facilitando la toma de decisiones. Además, un mayor número de pruebas permite la identificación temprana de nuevos casos (incluyendo asintomáticos), lo que reduce la posibilidad de contagio, ralentiza la pandemia y, en etapas posteriores, evita los repuntes.
                        </Card.Text>
                        <Card.Text className="labText">
                        De dicha cuenta, lo que se necesita, es aumentar nuestra capacidad de muestreo alcanzando una cantidad de pruebas por cada 100,000 habitantes por lo menos comparable a países de la region como Costa Rica, El salvador o Panama.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Container>
            </header>

            <main>
                <WeList/>
            </main>
        </React.Fragment>
    )
}

export default WeAre;