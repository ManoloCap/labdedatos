import React from "react";
import { useHistory } from "react-router-dom";


//Images
import logo from "../images/logo2.png";
//import logo2 from "../images/logo.png";

//Styles
import  "./WebMenu.css";

//Bootstrap
import {Navbar,
        Nav,
        Container,
        Row,
        Col,
        NavDropdown,
        FormControl,
        Form,
        Button,
  } from 'react-bootstrap';

const WebMenu = props => {
    const history = useHistory();
    const menuItems = [
        { key: 'home', name: 'Inicio', onClick: () => history.push('/')},
        { key: 'we', name: 'Quiénes Somos', onClick: () => history.push('/QuienesSomos/')},
        { key: 'serviciosYproyectos', name: 'Servicios y Proyectos', onClick:() => history.push('/ServiciosYProyectos/')},
        { key: 'news', name: 'Publicaciones', onClick: () => history.push('/Publicaciones/')},
      ]

    const covidButtonInfo = { 
        key: 'dashboard',
        name: 'Tablero Covid-19',
        onClick: () => history.push('/TableroCovid/')
    }

    const mortalidadButtonInfo = { 
        key: 'mortalidad',
        name: 'Exceso de mortalidad',
        onClick: () => history.push('/EM/'),
    }

    const logoClick = () => {
        history.push('/')
      } 

    return(
        <React.Fragment>
            <Navbar expand="lg">
            <Navbar.Brand><img className="clickable" onClick={()=>logoClick()} src={logo} alt="Logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                {menuItems.map((i) => (
                                        <Nav.Link
                                        key={i.key}
                                        className={"navFont ml-4 mr-4"}
                                        onClick={i.onClick}>
                                            {i.name}
                                        </Nav.Link>
                                    ))}
                                        <Nav.Link
                                        key={covidButtonInfo.key}
                                        className="covidButton ml-4 mr-4"
                                        onClick={covidButtonInfo.onClick}>
                                            {covidButtonInfo.name}
                                        </Nav.Link> 
                                        <Nav.Link
                                        key={mortalidadButtonInfo.key}
                                        className="EMButton ml-4 mr-4"
                                        onClick={mortalidadButtonInfo.onClick}>
                                            {mortalidadButtonInfo.name}
                                        </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar> 
        </React.Fragment>
    )
}
export default WebMenu;

