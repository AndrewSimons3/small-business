import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


const Login = () => {
  return (
    <div>
         <div className="App">
      <form>
        <TextField id="standard-basic" label="Username*"style={{width: "50%"}}/>
        <br />
        <TextField id="standard-basic" label="Password*" style={{width: "50%"}} />
        <br />
        <Button type="submit" variant="contained" color="primary" style={{margin: "30px", width:"50%"}} >
          Login
        </Button>
      </form>
    </div> 
    </div>
  )
}

export default Login;
