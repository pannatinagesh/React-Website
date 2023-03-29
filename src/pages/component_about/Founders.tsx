import { Button, Card, CardActions, Grid, Container, Divider, CardMedia, Avatar, Stack } from "@mui/material";
import React, {useState} from "react";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Typography from "@mui/material/Typography";
import './Componetstyles.css';
import CardContent from "@mui/material/CardContent";
import Chart from 'react-apexcharts';

const Founders = () => {

    return (
        <>
        <Container maxWidth="lg" sx={{m:'5% auto'}}>
        <Typography variant="h4" sx={{m:'20px', justifyContent:'center', display:'flex'}}>Meet our&nbsp;<span className="fontWeight">founders</span></Typography>
       <Grid container spacing={6} justifyContent={'center'}> 
       <Grid item xs={4}>
       <Card sx={{p:'20px', bgcolor:'#D4E3FF', borderRadius:'24px'}}>
      <CardMedia 
        component="img"
        image="/images/Shashwat.png"
      />
      <CardContent>
        <Typography gutterBottom justifyContent={'center'} display={'flex'}> Shashwat Shrikhande </Typography>
        <Typography gutterBottom>
            <Stack direction={'row'} spacing={2} justifyContent='center' display={'flex'}>
            <Button sx={{p:0, minWidth:0}}><img src="/images/iconlinkedin.png" /></Button>
            <Button sx={{p:0, minWidth:0}}><img src="/images/icongmail.png" /></Button>
            </Stack></Typography>
      </CardContent>
   
    </Card>
    </Grid>

    <Grid item xs={4}>
       <Card sx={{p:'20px', bgcolor:'#D4E3FF', borderRadius:'24px'}}>
      <CardMedia 
        component="img"
        image="/images/Saurabh Gupta.png"
      />
      <CardContent>
        <Typography gutterBottom justifyContent={'center'} display={'flex'}> Saurabh Gupta </Typography>
        <Typography gutterBottom>
            <Stack direction={'row'} spacing={2} justifyContent='center' display={'flex'}>
            <Button sx={{p:0, minWidth:0}}><img src="/images/iconlinkedin.png" /></Button>
            <Button sx={{p:0, minWidth:0}}><img src="/images/icongmail.png" /></Button>
            </Stack></Typography>
      </CardContent>
    </Card>
    </Grid></Grid>
       </Container>

       <Card sx={{ bgcolor: '#FAE2CC', width:'100%' }}>
                <Typography variant="h3" justifyContent={'space-around'} display={'flex'} alignItems={'center'} margin="10px 0px">
                    <img src='/images/icons8-confetti 1.png'></img>
                    <Stack direction={'row'} spacing={2} justifyContent='center' display={'flex'}>

                    <div >We are backed by</div>
                    <img src='/images/Rectangle 2.png' style={{width: '250px', height:'60px'}}></img>
                    </Stack>
                    <img src='/images/icons8-confetti 1.png'></img>
                </Typography>
                </Card>

                <Card sx={{ bgcolor: '#092F4C', width:'100%', backgroundImage: `url("/images/bg.png")` }}>
                <Container maxWidth="lg" sx={{m:'5% auto 1% auto'}}>

<Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{mb:'5%'}}>
<Stack direction="column" spacing={2}>
<Stack direction="row" spacing={2}>
<Button sx={{p:0, minWidth:0}}><img src='/images/finXlogo.png'></img> 
<Typography sx={{color: 'white', fontFamily: 'Aref Ruqaa Ink', ml:'10px'}} variant="h5">FinX</Typography></Button>
</Stack>
<Typography sx={{color: 'white'}}>Made with ❤️ in India</Typography>
</Stack>

<Stack direction="column" spacing={2}>
<Typography sx={{color: 'white'}}>Follow us on</Typography>
<Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
<Button sx={{p:0, minWidth:0}}><img src='/images/iconinstagram.svg'></img></Button>
<Button sx={{p:0, minWidth:0}}><img src="/images/iconlinkedin.png" /></Button>
<Button sx={{p:0, minWidth:0}}><img src='/images/icontwitter.svg'></img> </Button>
</Stack></Stack>
</Stack>

<Stack
  direction="row"
  divider={<Divider orientation="vertical" flexItem sx={{borderColor: 'white'}}/>}
  justifyContent="center"
  alignItems="flex-end"
  spacing={2}
>
<Typography sx={{color: 'white'}} variant='caption'>Copyright 2022 © NeoFirst Technologies</Typography>
<Typography sx={{color: 'white'}} variant='caption'><Button sx={{p:0, minWidth:0, color:'inherit', textTransform:'inherit'}}>Privacy policy&nbsp;&nbsp;Terms of use</Button></Typography>
</Stack>
</Container>

</Card>
               
       </>

    )
};

export default Founders;