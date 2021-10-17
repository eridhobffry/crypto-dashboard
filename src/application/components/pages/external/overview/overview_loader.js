import React, { Fragment, useEffect } from 'react'

const OverviewLoader = (props) => {
    const { children, getCryptoListings, cryptoLoaded } = props
    useEffect(() => {
        !cryptoLoaded && getCryptoListings()
    }, [cryptoLoaded, getCryptoListings])
    return <Fragment>
        {children}
    </Fragment>
}

export default OverviewLoader
