import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { checkAuth } from '../checkAuth'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
  title: {
    flexGrow: 1,
    display: "flex"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  console.log(checkAuth())

  return (
    <div className={classes.root}>
      <AppBar position="static" style= {{background: '#4caf50'}}>
        <Toolbar>
          <Typography edge="start" variant="h6" className={classes.title}>
            Austin Small Business
          </Typography>
          <Button color="inherit">Listings</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}