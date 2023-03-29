import { Button, Card, CardActions, Grid, Container, Divider, Slider, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Typography from "@mui/material/Typography";
import './Componetstyles.css';
import CardContent from "@mui/material/CardContent";
import Chart from 'react-apexcharts';

const LinerSlider = styled(Slider)({
  color: '#0060AC',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#0060AC',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const CalculateEmi = () => {

  const [state, setState] = useState({
    options: {
      colors: ['#FF897D', '#BDA2C7'],
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          customScale: 1 as const,
          size: 100 as const,
          donut: {
            size: '50%' as const,
          }
        }
      },
      legend: {
        show: false,
        position: `bottom` as const,
        horizontalAlign: 'center' as const,
        showForSingleSeries: true,
        display: 'block',
        marginBottom: '10px !important' as const,
        customLegendItems: ["Loan amount", "Interest at 10%"],
        offsetY: 0 as const,
        onItemClick: {
          toggleDataSeries: true as const
        },
        onItemHover: {
          highlightDataSeries: true as const
        },
      },
    },
    series: [0, 0],
    labels: ['A', 'B'],
  })

  const [value, setValue] = React.useState({loan: 10, rate:20, time: 10});
console.log(value);
 
useEffect(()=> {
  setState((pervState)=> ({...pervState, series: [value.loan*1000, (value.loan*1000 * value.rate)/100]}))
},[value])

  const handleSliderChange = (event: Event, newValue:any) => {
    setValue((prevState)=> ({...prevState, loan:newValue}));
  };

  const handleSliderChangeRate = (event: Event, newValue:any) => {
    setValue((prevState)=> ({...prevState, rate:newValue}));
  };

  const handleSliderChangeTime = (event: Event, newValue:any) => {
    setValue((prevState)=> ({...prevState, time:newValue}));
  };

  return (
    <Container maxWidth="md" sx={{ m: '5% auto' }}>
      <Typography variant="h5" sx={{ m: '20px', justifyContent: 'center', display: 'flex' }}>Calculate your&nbsp;<span className="fontWeight">EMI</span></Typography>
      <Card sx={{ p: '20px', bgcolor: '#D4E3FF' }}>
        <Grid container spacing={2}>
          <Grid item xs={8} >
            <Typography className="display-spaceBetween" sx={{ display: 'flex' }} gutterBottom alignItems='center'><span>Loan amount</span><span className="fontWeight" style={{ fontSize: '1.5rem' }}><CurrencyRupeeIcon fontSize="small" sx={{ fontSize: '1.5rem' }} />{(value.loan*1000)}</span></Typography>
            <LinerSlider valueLabelDisplay="auto" value={typeof value.loan === 'number' ? value.loan : 0}
            onChange={handleSliderChange} valueLabelFormat={((value.loan*1000)).toString()} min={2} max={20} />
            <Typography className="display-spaceBetweenBottom" variant="caption" gutterBottom><span style={{ alignItems: 'center', display: 'flex' }}><CurrencyRupeeIcon fontSize="small" sx={{ fontSize: '0.75rem' }} />2,000</span><span style={{ alignItems: 'center', display: 'flex' }}><CurrencyRupeeIcon fontSize="small" sx={{ fontSize: '0.75rem' }} />20,000</span></Typography>

            <Typography className="display-spaceBetween" gutterBottom alignItems='center'><span>Rate of interest</span><span className="fontWeight" style={{ fontSize: '1.5rem' }}>{value.rate}%</span></Typography>
            <LinerSlider valueLabelDisplay="auto" value={typeof value.rate === 'number' ? value.rate : 0}
            onChange={handleSliderChangeRate} valueLabelFormat={(value.rate).toString()} min={10} max={30} />
      
            <Typography className="display-spaceBetweenBottom" variant="caption" gutterBottom><span >10%</span><span>30%</span></Typography>

            <Typography className="display-spaceBetween" gutterBottom alignItems='center'><span>Loan tenure</span><span className="fontWeight" style={{ fontSize: '1.5rem' }}>{value.time} Months</span></Typography>
            <LinerSlider valueLabelDisplay="auto" value={typeof value.time === 'number' ? value.time : 0}
            onChange={handleSliderChangeTime} valueLabelFormat={(value.time).toString()} min={3} max={24} />
            <Typography className="display-spaceBetweenBottom" variant="caption" gutterBottom><span >3 Months</span><span >24 Months</span></Typography>

          </Grid>
          <Grid item xs={4}>
            <Card sx={{ m: '5px', height: '100%', borderRadius: '10px' }}>
              <CardContent>
                <Chart options={state.options} series={state.series} type="donut" />

                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{ mb: 1 }}>
                  <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" >
                    <div style={{ borderRadius: '50%', width: '10px', height: '10px', backgroundColor: '#FF897D' }}></div>
                    <Typography>Loan amount</Typography>
                  </Stack>
                  <Typography alignItems='center'><span style={{ alignItems: 'center', display: 'flex' }}><CurrencyRupeeIcon fontSize="small" sx={{ fontSize: '1rem' }} />{value.loan*1000}</span></Typography>
                </Stack>

                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} >
                  <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" >
                    <div style={{ borderRadius: '50%', width: '10px', height: '10px', backgroundColor: '#BDA2C7' }}></div>
                    <Typography>Interest at 10%</Typography>
                  </Stack>
                  <Typography alignItems='center'><span style={{ alignItems: 'center', display: 'flex' }}><CurrencyRupeeIcon fontSize="small" sx={{ fontSize: '1rem' }} />{(value.loan*1000 * value.rate)/100}</span></Typography>
                </Stack>

                <Divider sx={{ m: '10% 0' }} />
                <Typography className="display-spaceBetweenBottom" sx={{ display: 'flex' }} >Total Payable <span className="fontWeight" style={{ alignItems: 'center', display: 'flex' }}><CurrencyRupeeIcon fontSize="small" sx={{ fontSize: '1rem' }} />{(value.loan*1000 + ((value.loan*1000 * value.rate)/100))*value.time}</span></Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" fullWidth>Download Detail View</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Container>
  )
};

export default CalculateEmi;