import { getCryptoListingRequest } from "application/redux/actions/crypto"
import { connect } from "react-redux"
import OverviewComponent from "./component"

const mapStateToProps = (state) => ({
    cryptoLoaded: state.crypto.succeed,
    cryptoFailed: state.crypto.failed,
    cryptoRequest: state.crypto.request,
    cryptoListingsData: state.crypto.payload,
})

const mapDispatchToProps = dispatch => ({
    getCryptoListings: () => dispatch(getCryptoListingRequest())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OverviewComponent)
