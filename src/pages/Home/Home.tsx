import { FC } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import { Button, Grid } from '@mui/material';

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <div className="Home">
        <Grid container spacing={2} sx={{color: 'text.primary'}}>
          <Grid item xs={4}>
            <p>xs=6 md=8</p>
          </Grid>
          <Grid item xs={4}>
            <p>xs=6 md=8</p>
          </Grid>
          <Grid item xs={4}>
            <p>xs=6 md=8</p>
          </Grid>
          <Grid item xs={4}>
            <p>xs=6 md=8</p>
          </Grid>
          <Grid item xs={4}>
            <p>xs=6 md=8</p>
          </Grid>
          <Grid item xs={4}>
            <p>xs=6 md=8</p>
          </Grid>
        </Grid>
        <Button variant="contained">Hello World</Button>
      </div>
    </>
  );
};

export default Home;
