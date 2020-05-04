import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';






const Add = (props) => {


  return(

    <div>
    <form className="addForm">
      <TextField id="standard-basic" style={{width: "40%", margin: "15px"}} label="Name" />
      <br></br>
      <TextField id="standard-basic" style={{width: "40%", margin: "15px"}} label="Address" />
      <br></br>
      <TextField id="standard-basic" style={{width: "40%", margin: "15px"}} label="Hours ex: (8AM-9PM)" />
      <br></br>
      <TextField id="standard-basic" style={{width: "40%", margin: "15px"}} label="Description" />
      <br></br>
      <Button onClick={props.addListing} variant="contained" color="primary" style={{width: "40%", margin: "15px"}}>
          Save
      </Button>
    </form>
    </div>
  )
 
}

export default Add;