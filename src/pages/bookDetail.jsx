import React, { useEffect } from 'react'
import { useState } from 'react'
import DetailsCard from '../components/DetailsCard'
import {useNavigate} from 'react-router-dom'
import { Button } from '@mui/material';


function BookDetails() {
    const navigate = useNavigate();
    const initialDetails = {
        id: '132',
        properties: [
            {
                name: 'name',
                label: 'Book Name',
                value: 'Harry Potter',
                type: 'text',
                required: true
            },
            {
                name: 'author',
                label: 'Author',
                value: 'Daniel Radcliff',
                type: 'text',
                required: true
            },
            {
                name: 'borrowedBy',
                label: 'Borrowed By',
                value: 'Daniel Radcliff',
                type: 'autocomplete',
                required: false
            },
            {
                name: 'borrowDate',
                label: 'Date of Borrow',
                value: '2022-08-08',
                type: 'Date',
                required: true
            },
            {
                name: 'expectedReturnDate',
                label: 'Expected Return Date',
                value: '2022-08-14',
                type: 'Date',
                required: true
            }
        ]
    };
    const [details, setDetails] = useState({})

    useEffect(() => {
        setDetails(initialDetails);
    }, [])


    return (
        <>
            <Button variant='contained'
                sx={{
                    position: 'fixed',
                    top: '20px',
                    left: '20px'

                }}
                onClick={() => navigate(-1)}>
                Back
            </Button>
            <DetailsCard
                title={'Book Details'}
                details={details}
                setDetails={setDetails}
            /></>
    )
}

export default BookDetails