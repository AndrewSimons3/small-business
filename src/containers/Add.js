import { connect } from 'react-redux'
import Add from '../components/Add'
import { addListing } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: ()=> dispatch(addListing()),
  }
}

export default connect(mapDispatchToProps)(Add)