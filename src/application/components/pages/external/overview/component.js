import React, { Fragment } from 'react'
import BaseLayout from '../../_layout/base'
import OverviewLoader from './overview_loader'

const OverviewComponent = (props) => {
    const { cryptoLoaded } = props

    console.log('ER:: cryptoLoaded', cryptoLoaded)
    return <BaseLayout>
        <OverviewLoader {...props}>
            {
                cryptoLoaded && <Fragment>
                    Overview
                </Fragment>
            }
        </OverviewLoader>
    </BaseLayout>
}

export default OverviewComponent
