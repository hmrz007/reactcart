import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useParams } from 'react-router-dom'


function Reviews({ reviewdata }) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className='ms-2'
            >
                CUSTOMER REVIEWS
            </Button>
            <Collapse in={open}>

                <div>
                    {
                        reviewdata.map(item =>
                            <div><br></br>
                                <h5>USER : {item.name}</h5>
                                <h5 style={{color:'red'}}>{item.date}</h5>
                                <h5 style={{color:'green'}}>{item.rating}★</h5>
                                <h5>{item.comments}</h5>

                            </div>
                        )
                    }
                </div>
            </Collapse>




        </>
    )
}

export default Reviews