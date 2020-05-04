import React from 'react'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import { checkAuth } from '../checkAuth'
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';



const Listings = (props) => {

  return(
    <div>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Hours</TableCell>
            {checkAuth() === true && <TableCell align="right">Delete</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((listing, idx) => (
            <TableRow key={idx}>
              <TableCell><Link className="descriptionLink" to={`/listing/${listing.id}`}>{listing.name} </Link></TableCell>
              <TableCell>{listing.description}</TableCell>
              <TableCell>{listing.address}</TableCell>
              <TableCell>{listing.hours}</TableCell>
                {checkAuth() === true &&
                <TableCell align="center" style={{color: "red"}}
                  onClick={() => props.removeListing(idx)}>
                   <Grid item xs={8} align="right">
                      <DeleteIcon/>
                    </Grid> 
                </TableCell>}
            </TableRow>
          ))}  
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
  }

export default Listings;