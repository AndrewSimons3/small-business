import React from 'react'
import { Container } from '@material-ui/core';

const Details = (props) => {
  const listingId = parseInt(props.match.params.id)
  const businessDetails = props.listings.find(l => l.id === listingId)

  console.log(listingId)
  console.log(businessDetails)

  return (
    <Container>
      <h2>{businessDetails.name}</h2>
      <h3>{businessDetails.address}</h3>
      <h3>{businessDetails.hours}</h3>
      <p>{businessDetails.description}</p>
    </Container>
  )
}
export default Details;