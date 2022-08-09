import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";


export default function StudentsList() {
    const navigate = useNavigate()
    function createData(id, firstName, lastName) {
        return { id, firstName, lastName };
    }

    const students = [
        createData('123', 'John', 'Doe'),
        createData('232', 'Jane', 'Doe'),
    ];
    return (
        <TableContainer component={Paper} variant={'outlined'}
            style={{
                backgroundColor: 'aliceblue',
                maxWidth: '750px',
                margin: 'auto'
            }}
        >
            <Table sx={{ minWidth: 650 }}
                aria-label="Students table"
            >
                <TableHead
                    style={{
                        background: 'rgb(166, 195, 219)'
                    }}>
                    <TableRow>
                        <TableCell>Sr.</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students?.map((student, index) => (
                        <TableRow
                            key={student?.id}
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                                '&.MuiTableRow-root': {
                                    transition: '0.3s'
                                },
                                '&.MuiTableRow-root:hover': {
                                    backgroundColor: 'rgb(210, 223, 234)',
                                    cursor: 'pointer',
                                    transition: '0.3s'
                                },
                            }}
                            onClick={() => navigate(`/student/${student?.id}`)}
                        >
                            <TableCell >
                                {index + 1}
                            </TableCell>
                            <TableCell align="left">{student?.firstName}</TableCell>
                            <TableCell align="left">{student?.lastName}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
