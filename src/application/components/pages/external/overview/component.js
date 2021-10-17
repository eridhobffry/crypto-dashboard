import OverviewLoader from 'application/common/overview_loader'
import { TablePagination } from 'application/components/template'
import React, { Fragment } from 'react'
import BaseLayout from '../../_layout'

const OverviewComponent = (props) => {
    const { cryptoLoaded, cryptoListingsData, numberToShow } = props
    
    return <BaseLayout>
        <OverviewLoader {...props}>
            {
                cryptoLoaded && <Fragment>
                    <TablePagination
                        cryptoListingsData={cryptoListingsData}
                        pageSize={numberToShow}
                    />
                </Fragment>
            }
        </OverviewLoader>
    </BaseLayout>
}

export default OverviewComponent
