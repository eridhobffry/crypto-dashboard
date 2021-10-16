import React, { Fragment, useEffect } from 'react'

const OverviewLoader = (props) => {
    const { chlidren, getCryptoListings, cryptoLoaded } = props
    useEffect(() => {
        !cryptoLoaded && getCryptoListings()
    }, [cryptoLoaded, getCryptoListings])
    return <Fragment>
        {chlidren}
    </Fragment>
}

export default OverviewLoader
