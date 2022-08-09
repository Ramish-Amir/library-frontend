import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";


export default function BooksList() {
    const navigate = useNavigate();
    function createData(id, name, author, borrowedBy, borrowDate, expectedReturnDate) {
        return { id, name, author, borrowedBy, borrowDate, expectedReturnDate };
    }

    const books = [
        createData('214', 'Title', 'Author Name', 'Student xyz', '8th Aug 2022', '14th Aug 2022'),
        createData('212', 'Title 1', 'Author Name 1', 'Student abc', '8th Aug 2022', '14th Aug 2022'),
        createData('215', 'Title 1', 'Author Name 1', 'Student abc', '8th Aug 2022', '14th Aug 2022'),
        createData('216', 'Title 1', 'Author Name 1', 'Student abc', '8th Aug 2022', '14th Aug 2022'),
        createData('217', 'Title 1', 'Author Name 1', 'Student abc', '8th Aug 2022', '14th Aug 2022'),
        createData('218', 'Title 1', 'Author Name 1', 'Student abc', '8th Aug 2022', '14th Aug 2022'),
    ];
    return (
        <TableContainer component={Paper} variant={'outlined'}
            style={{
                backgroundColor: 'aliceblue',
                margin: 'auto'
            }}
        >
            <Table sx={{ minWidth: 650 }}
                aria-label="Books table"
            >
                <TableHead
                    style={{
                        background: 'rgb(166, 195, 219)'
                    }}>
                    <TableRow>
                        <TableCell>Sr.</TableCell>
                        <TableCell>Book Name</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>Borrowed By</TableCell>
                        <TableCell>Date of Borrow</TableCell>
                        <TableCell>Exptected Return Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books?.map((book, index) => (
                        <TableRow
                            key={book?.id}
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                                '&.MuiTableRow-root': {
                                    transition: '0.3s'
                                },
                                '&.MuiTableRow-root:hover': {
                                    backgroundColor: 'rgb(210, 223, 234)',
                                    cursor: 'pointer',
                                    transition: '0.3s'
                                }
                            }}
                            onClick={() => navigate(`/book/${book?.id}`)}
                        >
                            <TableCell >{index + 1}</TableCell>
                            <TableCell align="left">{book?.name}</TableCell>
                            <TableCell align="left">{book?.author}</TableCell>
                            <TableCell align="left">{book?.borrowedBy}</TableCell>
                            <TableCell align="left">{book?.borrowDate}</TableCell>
                            <TableCell align="left">{book?.expectedReturnDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
