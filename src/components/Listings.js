import React from 'react'


class Listings extends React.Component {

  render() {
    console.log(this.props)
    console.log(this.state)
  return(

    <div>
      {this.props.loggedIn && (<div>Logged In</div>)}
      Hello World
    </div>
  )
  }
}

export default Listings;