import React from "react";
import { Box, Grid, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { AppBar, Card, TextField, Toolbar, Typography } from "@mui/material";
import Container from "@mui/system/Container/Container";
import { color, width } from "@mui/system";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, FormControl, Button } from 'react-bootstrap';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#A4C9FF',
        color: '#1D1D1D',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // '&:nth-of-type(odd)': {
    //     backgroundColor: '#D4E3FF',
    // },

    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
        // backgroundColor: '#C1DAFF'
    },
}));

function createData(
    Loanamount: string,
    Dailyinstalment: number,
    loanamount: string,
    Dailyinstalments: number,
) {
    return { Loanamount, Dailyinstalment, loanamount, Dailyinstalments };
}

const rows = [
    createData('5,000', 120, '5,000', 65),
    createData('1,0000', 120, '1,0000', 65),
    createData('1,5000', 120, '1,5000', 65),
    createData('2,0000', 120, '2,0000', 65),

];

const LoanTable = () => {
    return (
        <>
             <div style={{ padding: '5%', backgroundColor: '#EBF1FF' }}>
                <Container maxWidth="md" >
                    <Typography variant="h5" sx={{ m: '20px', justifyContent: 'center', display: 'flex' }}>How&nbsp;<span className="fontWeight">daily instalment</span>&nbsp;<span style={{ justifyContent: 'center', display: 'flex' }}>works?</span></Typography>
                    <Typography justifyContent={'center'} display={'flex'} alignItems={'center'} gutterBottom>
                        <div className="titletwo" style={{ marginTop: '12px' }}>The loan amount will be recovered daily from the person according to the time
                            <div style={{ textAlign: 'center' }}> & amount of loan he/she has.</div></div></Typography>
                    <Card sx={{ borderRadius: '20px' }}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Loan amount (3 Months)</StyledTableCell>
                                        <StyledTableCell align="left">Daily instalment</StyledTableCell>
                                        <StyledTableCell>Loan amount (6 Months)</StyledTableCell>
                                        <StyledTableCell align="left">Daily instalment</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.Loanamount} hover>
                                            <StyledTableCell component="th" scope="row">
                                                {row.Loanamount}
                                            </StyledTableCell>
                                            <StyledTableCell align="left">{row.Dailyinstalment}</StyledTableCell>
                                            <StyledTableCell align="left">{row.loanamount}</StyledTableCell>
                                            <StyledTableCell align="left">{row.Dailyinstalments}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </Container>
            </div>
        </>
    )
}

export default LoanTable;