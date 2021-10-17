import OverviewLoader from 'application/common/overview_loader'
import ChartScatter from 'application/components/template/charts'
import React, { Fragment } from 'react'
import BaseLayout from '../../_layout'

const LiquidityStatsComponent = props => {
    const { cryptoLoaded } = props
    return <BaseLayout>
        <OverviewLoader {...props}>
            {
                cryptoLoaded && <Fragment>
                    <ChartScatter {...props} />
                </Fragment>
            }
        </OverviewLoader>
    </BaseLayout>
}

export default LiquidityStatsComponent
