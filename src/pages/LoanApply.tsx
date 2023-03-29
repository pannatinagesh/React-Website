import React, { useEffect, useState } from "react";
import { Box, formLabelClasses, Grid, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { AppBar, Card, TextField, Toolbar, Typography } from "@mui/material";
import Container from "@mui/system/Container/Container";
import { color, width } from "@mui/system";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, FormControl, Button } from 'react-bootstrap';

const LoanApply = () => {

    const [data, setData]: any = useState({ phone: ' ' })
    const handleSubmit = (e: any) => {
        // const {name, value}= e.target;
        setData({ ...data, [e.target.name]: e.target.value })
        // console.log(data, "testing")
    }

    function Submit() {
        fetch('https://jsonplaceholder.typicode.com/todos/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }, body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    // const [phone, setPhone] = useState({ phone: '', error: false });
    // console.log(phone)

    // const regex = /^[7-9][0-9]{9}$/;

    // const handleChange = (e: any) => {
    //     setPhone((prevState) => ({ ...prevState, ['phone']: e.target.value }))

    //     if (e.target.value && !regex.test(e.target.value)) {
    //         setPhone((prevState) => ({ ...prevState, ['error']: true }))
    //     }
    //     else {
    //         setPhone((prevState) => ({ ...prevState, ['error']: false }))
    //     }
    // };

    // const handleSubmit = () => {

    // }


    return (
        <>
            <Card sx={{ bgcolor: '#FAE2CC' }}>
                <Typography justifyContent={'center'} display={'flex'} alignItems={'center'} marginTop={'2%'} gutterBottom>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ width: '100%' }}>
                        <img src='/images/icons8-confetti 1.png'></img>
                        <div className="fontWeight">We are backed by</div>
                        <img style={{ width: "100px", height: "20px" }} src='/images/Rectangle 2.png'></img>
                        <img src='/images/icons8-confetti 1.png'></img>
                    </Stack>
                </Typography>
                <Stack direction="row" spacing={2} marginLeft="64px">
                    <img src='/images/finXlogo.png'></img>
                    <Typography sx={{ fontFamily: 'Aref Ruqaa Ink' }} variant="h5">FinX</Typography>
                </Stack>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <div className="textone">Get instant daily instalment
                            <div> loan upto <div className="costrupees">₹20,000</div></div></div>
                        <div className="texttwo">Need some fast cash? Bad credit score? Try Finx to<div> get your work done.</div></div>
                        <div className="textthree">
                            What is daily installment loan?
                        </div>
                        <Form >
                            <FormControl name='phone' type="number" className="formfield" value={data.phone} onChange={handleSubmit} placeholder="Enter your phone number" />
                            {/* <FormControl type="text" className="formfield" placeholder="Enter your phone number" onChange={handleChange}/> */}
                            <span>
                                <Button onClick={Submit} className="applybutton" >APPLY NOW</Button>
                                {/* <Button className="applybutton" onClick={handleSubmit}>APPLY NOW</Button> */}

                            </span>
                        </Form>
                    </Grid>
                    <Grid item xs={6} alignItems={'center'} marginBottom={'2%'}>
                        <img src='/images/Layer_1(1).png'></img>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}

export default LoanApply;