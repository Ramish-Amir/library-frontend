import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useState } from 'react'
import DetailsCard from '../components/DetailsCard'
import {useNavigate} from 'react-router-dom'

function StudentDetail() {
    const [details, setDetails] = useState({})
    const navigate = useNavigate();
    const initialDetails = {
        id: '132',
        properties: [
            {
                name: 'firstName',
                label: 'First Name',
                value: 'John',
                type: 'text',
                required: true
            },
            {
                name: 'lastName',
                label: 'Last Name',
                value: 'Doe',
                type: 'text',
                required: true
            }
        ]
    };

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
                title={'Student Details'}
                details={details}
                setDetails={setDetails}
            />
        </>
    )
}

export default StudentDetail