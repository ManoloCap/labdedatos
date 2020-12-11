import React, { useState, useEffect } from "react";
import {useHistory } from "react-router-dom";
//bootstrap
import {
    Container,
    Card,
    Col,
    Row,
    Image,
    Button,
} from 'react-bootstrap';



const Post = props => {

    const history = useHistory();
    const [postData, setPostData] = useState(props.state)

    useEffect( () => {
        setPostData(props.state)
    }, [props.state])

    const navigateToPDF = () =>  {
        window.open("/pdfs/".concat(postData.download), "_blank");
    }
    return (
        <React.Fragment>
            {postData

            ?
            <Col lg="12" md="12" sm="12" className="border-0">
                <Row className="border-0">
                    
                    <Col lg="6" md="12" sm="12" className="border-0">
                        <Card className="text-center border-0">
                            <Card.Body className="">
                                <Image className="img-fluid img-Max-Post" src={"/images/blog/".concat(postData.img)} alt="Responsive image"  />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg="6" md="12" sm="12" className="border-0">
                        <Card className="text-left border-0">
                            <Card.Body>
                                <Card.Title className="font-weight-bold">
                                    <h2 className="postTitle">{postData.title}</h2>
                                </Card.Title>
                                <Card.Title className="font-weight-bold">{postData.date}</Card.Title>
                                <Card.Text>{postData.description}</Card.Text>
                                <Button  onClick={()=>navigateToPDF()}>Descargar</Button>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                </Row>
            </Col>

            : <Container>
                {"Publicación no Encontrada"}
            </Container>
            }
        </React.Fragment>

)}

export default Post;