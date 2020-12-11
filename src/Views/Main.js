import React from "react";
import Toast from "../components/Toast";

// Google Sheets Credentials
import google from "../credentials.json"

//Bootstrap
import {Container,
    Row,
    Col,
    Card,
    Button,
    Carousel,
} from 'react-bootstrap';

// Twitter
import { Tweet, Timeline } from 'react-twitter-widgets'

// IAm Component
const SquareData = props => {
let style = {
    backgroundColor: props.backgroundColor,
    color: props.color,
    minHeight: "100%",
    maxHeight: "100%",
    border: 0,
   
}

return(
    <Col lg="3" md="6" sm="6" style={style}>
        <Card className="text-center" style={style}>
            <Card.Body>
                <Card.Title style={{fontSize: 15, marginTop: "0%"}}>{props.title}</Card.Title>
                <Card.Text style={{fontSize: 30, marginBottom: "0%", marginTop: "0%"}}>{props.value1}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
)}

const Main = () => {

    var googleApiKey = "AIzaSyCLlbSlxI5szCh-z7_8zGi_QdPB1eKrSGQ"
    console.log(google.web.client_id);
    console.log(google.web.secret_);

    let showToastStatus = false
    let toastMessage = "RESUMEN DE CASOS COVID-19 DETECTADOS EN GUATEMALA: AL 19-10-2020"
    let toastColor = "var(--fourthColor)"
    let toastBackground = "var(--secondColor)"

    /*// Data 
    
    let gsheetsId = "2PACX-1vSr6pKBg-AZgiD2E1Yn8fPEAi1x8J-GE_FsKyR77Pxan2wN_sDrmXIjBwQLVmboijv62drq1Hyh2FQY";
    const GSheetReader = require('g-sheets-api');

    let options = {
        sheetId: gsheetsId,
        sheetNumber: 1,
        returnAllResults: false,
        filter: {
        },
        filterOptions: {
        }
      }
    GSheetReader(
        options,
        results => {
          console.log(results)
        },
        error => {
          console.log(error)
        }
      );
*/
    // Squares */\\

    let squaresData = [
        { 
            
            "key" : 1,
            "title" : "TOTAL DE CASOS REPORTADOS",
            "value1" : "102218",
            "color" : "white",
            "backgroundColor": "var(--firstColor)"
        },
        {
            "key": 2,
            "title" : "CASOS NUEVOS REPORTADOS ESTE DÍA",
            "value1" : "618",
            "color" : "white",
            "backgroundColor": "var(--secondColor)"
        },
        {
            "key": 3,
            "title" : "TOTAL FALLECIDOS REPORTADOS Y LETALIDAD",
            "value1" : "618 - 3.47%",
            "color" : "white",
            "backgroundColor": "var(--thirdColor)"
        },
        {
            "key": 4,
            "title" : "TAMIZADOS REPORTADOS ESTE DÍA",
            "value1" : "4244",
            "color" : "white",
            "backgroundColor": "#F3634E"
        }
    ]
    
    // End Data
    return(
        <React.Fragment>
            <Toast popUpMessage={toastMessage}
                   color={toastColor}
                   background={toastBackground}
                   showToast={showToastStatus}
            />


            <Container className="mt-1 mb-5" >
                <Row>
                    {squaresData.map((square) => (
                        
                            <SquareData
                            key= {square.key}
                            backgroundColor={square.backgroundColor}
                            color={square.color}
                            title={square.title}
                            value1={square.value1}
/>
                        
                    ))}

                </Row>
            </Container>

            <Container className="my-0">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src="https://www.10wallpaper.com/wallpaper/1366x768/1703/Hummingbird_macro-Spring_Bird_Photo_Wallpaper_1366x768.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Prueba</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="https://fondosmil.com/fondo/33186.jpg"
                            alt="First slide"
                        />
                            <Carousel.Caption>
                            <h3>Prueba 2</h3>
                            </Carousel.Caption>
                    </Carousel.Item>
                    
                </Carousel>
            </Container>

                        
            <Container fluid className="mt-5 px-5" style={Styles.aboutDashboard}>
                    <h5 className="pt-5 pb-2" style={Styles.aboutDashboard.h5}> Sobre el Dashboard</h5>
                    <p  style={Styles.aboutDashboard.p}>
                    Aunque el total de casos detectados puede impresionar, 
                    no facilita un entendimiento real de la situación. 
                    De manera cotidiana, lo que necesitamos saber es: <br/><br/>

                    ¿El virus se está propagando más rápido, o se está desacelerando 
                    su progresión?
                    Si se está desacelerando, 
                    ¿Cuándo comenzará a disminuir el número de casos? 
                    ¿Es momento de reducir medidas?  <br/><br/>
            
                    Desde el inicio de la Pandemia, 
                    ha habido un amplio debate sobre cuál es la mejor manera 
                    de medi r la evolucón de la epidemia.Existen diferentes criterios, 
                    y realmente no hay una respuesta concreta. En este Dashboard 
                    utilizaremos algunos de los métodos más aceptados: escala 
                    logarítmica, promedios móvilesl, tiempo de duplicación, y 
                    tasa de progresión, ya que estos métodos facilitan de manera 
                    visual la respuesta a estas preguntas. <br/><br/>

                    Sobre la cantidad de pruebas realizadas <br/><br/>

                    Ningún país conoce a exactitud el número total de personas 
                    infectadas con COVID-19. La cantidad de casos positivos 
                    confirmados, es una muestra estadística de la población real. 
                    La cantidad de pruebas es una ventana a la Pandemia y cómo se
                     está desarollando. <br/><br/>
                   
                    A partir de esta muestra, podemos inferir el la tendencia de 
                    la epidemia a fin de tomar decisiones. Esto demuestra la gran 
                    importancia de realizar la mayor cantidad de pruebas posibles: 
                    Sin pruebas no hay datos. Sin suficientes pruebas, no hay datos 
                    confiables. Por eso, para interpretar cualquier dato sobre casos 
                    confirmados, necesitamos saber cuántas pruebas de COVID-19 hace 
                    realmente el país
                    </p>
            </Container>

            <Container  fluid className="my-3" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}>
            
                <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'labdatosgt',
  }}
  options={{
    height: '500',
    width:'800',
    noborders: "true",
  }}
/>
            </Container>
        </React.Fragment>
    )
}


/* Styles */
let Styles = {}

Styles.aboutDashboard = {
    backgroundColor:"var(--crustaColor)",
    color:"white",
}

Styles.aboutDashboard.h5 = {
    fontSize: "55px",
    color:"var(--fourthColor)",
    fontWeight: "bold",
}

Styles.aboutDashboard.p = {
    fontSize: "18px",
    color:"white",
    fontWeight: "normal",
}

/*

<div style= {{width: 660, height: 'auto'}} >
    <ResponsiveEmbed aspectRatio="16by9">
        <embed src="https://labdedatosgt.com/" />
    </ResponsiveEmbed>
</div>

*/

export default Main;