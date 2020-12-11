import React, { useState, useEffect } from "react";
import {useHistory } from "react-router-dom";
import Post from "./Post";

//bootstrap
import {
    Container,
    Card,
    Col,
    Row,
    Image,
} from 'react-bootstrap';

import axios from 'axios';


const Blog = props => {

    const history = useHistory();

    //States
    const [blogData, setBlogData] = useState([]);
    const [postData, setPostData] = useState(null);

    //Back Button reset the state
    history.listen(location => {
        if (location.pathname === '/Publicaciones/') {
            if(!props.match.params.id){
                setPostData(null)
            }
    }})

    //Fetch Blog Data
    const fetchBlogData = async () => {
            
        //API Blog Data
        if(blogData.length < 1){
            const result = await axios(
                'https://json.extendsclass.com/bin/61b08eee5859',
            );
            setBlogData(result.data)
        }
        
    }     

    //Update Post Data 
    const getPostState = () => {
        return postData
    }

    //Use Effect
    useEffect( () => {
 
        fetchBlogData()

        if(parseInt(props.match.params.id) >= blogData.length){
            setPostData(null)
              
        } else{
            setPostData(blogData[props.match.params.id])
    
        }

    }, [blogData,postData]);




    // Setting the Post
    function navigateToPost(index){
        setPostData(blogData[index])
        history.push('/Publicaciones/'+index)
        
    }

    return (
        <React.Fragment>
            <Container className="border-0">
                {props.match.params.id
                    ? <Post state={getPostState()}></Post>

                    : blogData.map((data, index) => (
                        <Col lg="12" md="12" sm="12" key={index} className="border-0 px-10 clickable py-1" onClick={()=>navigateToPost(index)}>
                            <Row className="border border-dark rounded">
                                <Col lg="6" md="6" sm="6" className="border-0 my-auto">
                                    <Card className="text-center border-0">
                                        <Card.Body>
                                            <Image  className="img-fluid img-Max-Post" src={"/images/blog/".concat(data.img)} alt="Responsive image"/>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg="6" md="6" sm="6" className="border-0">
                                    <Card className="text-left border-0 align-self-center">
                                        <Card.Body>
                                            <Card.Title className="font-weight-bold">{data.title}</Card.Title>
                                            <Card.Text>{data.description}</Card.Text>
                                            
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        ))
                }
            </Container>
        </React.Fragment>

)}

export default Blog;