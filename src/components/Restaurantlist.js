import React from 'react'
import { useState, useEffect } from 'react'
import RestCard from './RestCard.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restaurantlist() {
    const [allrestaurant, setallrestaurant] = useState([])                          //24/01/23



    //function to api call for datas inside json file

    const restaurantdata = async () => {
        await fetch('/restaurants.json').then((data) => data.json()).then((result) => {     
            setallrestaurant(result.restaurants)
        })
    }
    // console.log(allrestaurant);

    useEffect(() => {
        restaurantdata()
    }, [])                                               //[] is used to stop loading of function again nd again

    return (

        <Row>
            {
                allrestaurant.map(item => (      //{} use chynila cause {}use akyal return kodknm ith inside return ayyond {} use aakunilla
                    <RestCard data={item} />
                ))
            }

        </Row>
    )
}

export default Restaurantlist


