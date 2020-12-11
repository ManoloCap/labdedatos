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
import {
  Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let showToastStatus = !false;
  let messageToast = "Barra POP-UP PARA CUALQUIER ANUNCIO" ;
  let toastColor = "var(--fourthColor)"
  let toastBackground = "var(--firstColor)"
  //let // link
  
  const history = useHistory();
  const [path, setPath] = useState("");

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
        <head>
        <meta name="viewport" content="width=device-width, target-densityDpi=device-dpi;" />
        </head>
        <Container fluid>
          <Toast popUpMessage={messageToast}
                    color={toastColor}
                    background={toastBackground}
                    showToast={showToastStatus}
                />
          <WebMenu />
          <Routes />
          <Footer/>
        </Container>
    </div>
  );
}

export default App;
