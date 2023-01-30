import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function RestCard({ data }) {    //data is given in restaurnatList function a than ivde kodukande
    console.log(data);
    return (
        <Col className='p-3' sm={12} md={6} lg={4} xl={3} >
            <Link style={{textDecoration:"none",color:"black"}} to={`view-restaurant/${data.id}`}>

                <Container>
                    <Card className='mt-4 text-center' style={{ width: '100%' }}>
                        <Card.Img variant="top" src={data.photograph} />
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Text>
                                {data.neighborhood}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>

            </Link>
        </Col>
    )
}

export default RestCard