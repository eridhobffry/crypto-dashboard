import { setCurrentPageStore } from "application/redux/actions/common"
import { getCryptoListingRequest } from "application/redux/actions/crypto"
import { connect } from "react-redux"
import ChartPagingComponent from "./component"

const mapStateToProps = (state) => ({
    currentPage: state.common.currentPage,
    numberToShow: state.common.numberToShow
})

const mapDispatchToProps = dispatch => ({
    setCurrentPageStore: (page, metaData) => {
        dispatch(setCurrentPageStore(page))
        dispatch(getCryptoListingRequest(metaData))
    }
})


export default connect(
    mapStateToProps, mapDispatchToProps
)(ChartPagingComponent)