import React from 'react'
import BaseLayout from '../../_layout/base'
import OverviewLoader from './overview_loader'

const OverviewComponent = (props) => {
    console.log('ER:: props', props)
    return <BaseLayout>
        <OverviewLoader {...props}>

            Overview external
        </OverviewLoader>
    </BaseLayout>
}

export default OverviewComponent
