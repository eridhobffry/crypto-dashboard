import { setNumberDataToShow } from "application/redux/actions/common"
import { getCryptoListingRequest } from "application/redux/actions/crypto"
import { connect } from "react-redux"
import BaseLayout from "./base"

const mapStateToProps = (state) => ({
    currentPage: state.common.currentPage
})

const mapDispatchToProps = dispatch => ({
    updateShowData: (metaData) => {
        dispatch(setNumberDataToShow(metaData.limit))
        dispatch(getCryptoListingRequest(metaData))
    }
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(BaseLayout)
