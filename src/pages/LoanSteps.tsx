import React from "react";
import { Box, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { AppBar, Card, TextField, Toolbar, Typography } from "@mui/material";
import Container from "@mui/system/Container/Container";
import { color, width } from "@mui/system";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, FormControl, Button } from 'react-bootstrap';
import { Opacity } from "@mui/icons-material";

const LoanSteps = () => {
    return (
        <>
            <Card sx={{ bgcolor: '#FAFAFE' }}>
                {/* <Typography justifyContent={'center'} display={'flex'} alignItems={'center'} gutterBottom>
                    <div className="header" >Apply for loan in 3 easy steps</div>
                </Typography> */}

                <Typography variant="h5" sx={{m:'20px', justifyContent:'center', display:'flex'}}>Apply for loan in&nbsp;<span className="fontWeight">3 easy steps</span></Typography>


                <Grid container spacing={2}>
                    <Grid item xs={1} justifyContent='end' display={'flex'} alignItems='center' >
                        <div className="stepcircle">1</div>
                    </Grid>
                    <Grid item xs={5} display={'flex'} alignItems={'center'}>
                        <div className="stepone">STEP 1
                            <div className="steponetext">Fill up few informations asked <div>by our agents.</div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6} alignItems={'center'}>
                        <img className="Imageone" src='/images/Layer_1.png'></img>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    
                    <Grid item xs={6} alignItems={'center'}>
                        <img style={{ marginLeft: '64px' }} src='/images/Group.png'></img>
                    </Grid>
                    {/* <Grid item xs={1} justifyContent='end' display={'flex'} alignItems='center' >
                    </Grid> */}
                    <Grid item xs={5} display={'flex'} alignItems={'center'}>
                    <div className="stepcircle" style={{position:'absolute', right:'27%'}}>2</div>
                    <div style={{marginLeft:'60%'}}> STEP 2
                            <div className="steponetext">Finish all the formalities &<div>documentations.</div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={1} justifyContent='end' display={'flex'} alignItems='center' >
                        <div className="stepcircle">3</div>
                    </Grid>
                    <Grid item xs={5} display={'flex'} alignItems={'center'}>
                        <div className="stepone">STEP 3
                            <div className="steponetext">Get money instantly in your<div>bank account.</div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6} alignItems={'center'}>
                        <img className="Imagethree" src='/images/Group 15.png'></img>
                    </Grid>
                </Grid>
            </Card>

        </>
    )
}

export default LoanSteps;