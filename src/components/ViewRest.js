import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image,Button } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Reviews from './Reviews';

//27/01/23

function ViewRest() {
    const params = useParams()
    //console.log(paramas.id);

    const [allrestaurant, setallrestaurant] = useState([])
    //function to api call for datas inside json file
    const restaurantdata = async () => {
        await fetch('/restaurants.json')
            .then((data) => data.json()).then((result) => {

                setallrestaurant(result.restaurants)
            })
    }
    // console.log(allrestaurant);
    const restData=allrestaurant.find(item=>item.id==params.id)
    // console.log(restData);

    useEffect(() => {
        restaurantdata()
    }, [])


    return (
        <>
        {restData?(
        <Row>
            <Col>
            <Image src={restData.photograph} fluid className='p-5' width={500} height={500} />
            </Col>

            <Col className='p-5'>
            <h1>{restData.name}</h1>
            <h2>{restData.neighborhood}</h2>
            <h4>Cuisine Type:{restData.cuisine_type}</h4>
            <h4>Address:{restData.address}</h4>
            <Operatingtime timedata={restData.operating_hours}></Operatingtime>
            <Reviews  reviewdata={restData.reviews}></Reviews>
            </Col>
        </Row>




        ):'null'}

        </>
    )
    
}

export default ViewRest