import OverviewLoader from 'application/common/overview_loader'
import { ChartPaging } from 'application/components/template'
import React, { Fragment } from 'react'
import BaseLayout from '../../_layout'

const LiquidityStatsComponent = props => {
    const { cryptoLoaded, numberToShow, cryptoListingsData } = props
    return <BaseLayout>
        <OverviewLoader {...props}>
            {
                cryptoLoaded && <Fragment>
                    <ChartPaging
                        cryptoListingsData={cryptoListingsData}
                        pageSize={numberToShow}
                    />
                </Fragment>
            }
        </OverviewLoader>
    </BaseLayout>
}

export default LiquidityStatsComponent
