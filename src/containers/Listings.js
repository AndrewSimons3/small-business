import { connect } from 'react-redux'
import Listings from '../components/Listings'
import { addListing, removeListing } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    listings: state.listings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: ()=> dispatch(addListing()),
    removeListing: (index) => dispatch(removeListing(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)