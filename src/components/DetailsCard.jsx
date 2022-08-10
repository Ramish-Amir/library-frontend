import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Autocomplete, Button, CardActions, TextField } from '@mui/material';
import { useState } from 'react';

export default function DetailsCard(props) {
    const { title, details, setDetails, studentsList } = props;
    const [detailsCopy, setDetailsCopy] = useState({});
    const [isEdit, setEdit] = useState(false);

    const openForm = () => {
        setDetailsCopy(JSON.parse(JSON.stringify(details)));
        setEdit(true);
    }

    const handleChange = (e, index) => {
        const tempArr = [...details?.properties];
        tempArr[index]['value'] = e.target.value;
        setDetails({
            ...details,
            properties: tempArr
        })
    }

    const handleCancel = () => {
        setDetails(detailsCopy);
        setEdit(false);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        setEdit(false);
    }


    return (
        <Card variant='outlined' sx={{
            maxWidth: 345,
            margin: 'auto',
            border: '1px solid rgb(166, 195, 219)',
            background: 'aliceblue'
        }}>
            <CardContent>
                <Typography
                    sx={{
                        background: 'rgb(84, 127, 163)',
                        color: 'white',
                        borderRadius: '5px'
                    }}
                    gutterBottom
                    variant="h4">
                    {title}
                </Typography>

                <div className='card-content'>

                    {
                        !isEdit
                            ? details?.properties?.map((property, index) =>
                                <div key={index}>
                                    <Typography variant="body2" color="text.secondary">
                                        {property?.label}:
                                    </Typography>
                                    <Typography variant="body1">
                                        {property?.value}
                                    </Typography>
                                </div>
                            )
                            : details?.properties?.map((property, index) =>
                                <div key={index}>
                                    {property?.type !== 'autocomplete'
                                        ? <TextField
                                            sx={{
                                                margin: '10px 0',
                                            }}
                                            id="outlined-basic"
                                            variant="outlined"
                                            name={property?.name}
                                            type={property?.type}
                                            required={property?.required}
                                            label={property?.label}
                                            value={property?.value}
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                        : 
                                        // <Autocomplete
                                        //     disablePortal
                                        //     id="combo-box-demo"
                                        //     options={studentsList}
                                        //     sx={{ width: 300 }}
                                        //     renderInput={(params) => <TextField {...params} label={property?.label} />}
                                        // />
                                        <TextField
                                            sx={{
                                                margin: '10px 0',
                                            }}
                                            id="outlined-basic"
                                            variant="outlined"
                                            name={property?.name}
                                            type={property?.type}
                                            required={property?.required}
                                            label={property?.label}
                                            value={property?.value}
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                    }
                                </div>
                            )
                    }
                </div>
            </CardContent>
            <CardActions>

                {!isEdit
                    ? <Button
                        sx={{
                            margin: 'auto'
                        }}
                        variant='contained'
                        onClick={openForm}
                    >
                        Edit
                    </Button>
                    : <>
                        <Button
                            sx={{
                                margin: 'auto',
                            }}
                            variant='contained'
                            onClick={(e) => handleUpdate(e)}
                        >
                            Save
                        </Button>
                        <Button
                            sx={{
                                margin: 'auto'
                            }}
                            variant='contained'
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                    </>
                }





            </CardActions>
        </Card>
    );
}
