import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { flex } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
  title: {
    flexGrow: 1,
    // marginRight: 488
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography edge="start" variant="h6" className={classes.title}>
            Austin Small Business
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Listings</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}