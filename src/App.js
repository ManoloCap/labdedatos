//React
import Routes from './Routes';
import React, { useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

//Components
import WebMenu from "./components/WebMenu";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

//Styles
import './App.css';

//Assets
import logo from './logo.svg';


//Bootstrap
import {Button,
  Alert,
  Breadcrumb,
  Card
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const history = useHistory();
  const [path, setPath] = useState("");
  const showToast = false;
  const messageToast = "Barra POP-UP PARA CUALQUIER ANUNCIO" ;
  const checkPath = () => {
    history.listen((location) => {
      setPath(location.pathname);
    });
  }

  useEffect(() => {
    checkPath();
  }, [])

  return (
    <div className="App">
        <Toast popUpMessage={messageToast} showToast={showToast}/>
        <WebMenu/>
        <Routes/>
        <Footer/>
    </div>
  );
}

export default App;
