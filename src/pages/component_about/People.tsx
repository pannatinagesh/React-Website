import { Button, Card, CardActions, Grid, Container, Divider, CardMedia, Avatar, Stack } from "@mui/material";
import React, {useState} from "react";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Typography from "@mui/material/Typography";
import './Componetstyles.css';
import CardContent from "@mui/material/CardContent";

const People = () => {

    return (
      // <div style={{padding:'5%', backgroundColor:'#EBF1FF'}}>
      <Container fixed maxWidth={false} disableGutters sx={{p:'5% 15%', m: 'auto', backgroundColor:'#EBF1FF'}}>

        <Typography variant="h4" sx={{m:'20px', justifyContent:'center', display:'flex'}}>We listen to&nbsp;<span className="fontWeight">people</span></Typography>
       <Grid container spacing={2}> 
       <Grid item xs={4}>
       <Card sx={{p:'20px', bgcolor:'#D4E3FF', borderRadius:'24px'}}>
      <CardMedia 
        component="img" sx={{width:'40px', height:'30px'}}
        image="/images/coloums.svg"
      />
      <CardContent sx={{height:'20em'}}>
        <Typography gutterBottom variant="h5" component="div">
        Extremely useful app
        </Typography>
        <Typography variant="body2" color="text.secondary">
        It’s the simplest way to get money without any hidden charges. It’s very easy. I booked a car for myself using Finx.
        </Typography>
      </CardContent>
      <CardActions>
      <Stack direction="row" spacing={2}>
      <Avatar src={'/images/people1.png'} />
      <Typography alignItems={'center'} display={'flex'}>Aditya Singh</Typography>
      </Stack>
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={4}>
       <Card sx={{p:'20px', bgcolor:'#D4E3FF', borderRadius:'24px'}}>
      <CardMedia 
        component="img" sx={{width:'40px', height:'30px'}}
        image="/images/coloums.svg"
      />
      <CardContent sx={{height:'20em'}}>
        <Typography gutterBottom variant="h5" component="div">
        Amazing service
        </Typography>
        <Typography variant="body2" color="text.secondary">
        I took a loan from Finx for my home inauguration. It had better and more attractive interest rates compared to other NBFCs.
        </Typography>
      </CardContent>
      <CardActions>
      <Stack direction="row" spacing={2}>
      <Avatar src={'/images/people2.png'} />
      <Typography alignItems={'center'} display={'flex'}>Shushil Pandey</Typography>
      </Stack>
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={4}>
       <Card sx={{p:'20px', bgcolor:'#D4E3FF', borderRadius:'24px'}}>
      <CardMedia 
        component="img" sx={{width:'40px', height:'30px'}}
        image="/images/coloums.svg"
      />
      <CardContent sx={{height:'20em'}}>
        <Typography gutterBottom variant="h5" component="div">
        Easy access
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Purchased a Laptop for my business. It’s very easy and for urgent short of cash Finx has given always financial backup for me. We are using it for a very long time.
        </Typography>
      </CardContent>
      <CardActions >
      <Stack direction="row" spacing={2}>
      <Avatar src={'/images/people3.png'} />
      <Typography alignItems={'center'} display={'flex'}>Anjali</Typography>
      </Stack>
      </CardActions>
    </Card>
    </Grid></Grid>
       </Container>
    )
};

export default People;