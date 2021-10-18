import React, { Fragment } from 'react'
import { useConvertToChartDataSets } from './helpers'
import { Bubble } from "react-chartjs-2"
import ResizableBox from 'application/common/resizeable_box'
import { useMediaQuery } from 'react-responsive'

const ChartScatterComponent = props => {
    const { cryptoListingsData } = props
    const useMobile = useMediaQuery({ maxWidth: 767 })
    const { minRawData } = cryptoListingsData
    const { data, options } = useConvertToChartDataSets(minRawData, useMobile)
    
    return <Fragment>
        <ResizableBox>
            <div class="chart-container" style={{
                position: "relative", height: "100%", width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' 
            }}>
                <Bubble data={data} options={options} />
            </div>
        </ResizableBox>
    </Fragment>
}

export default ChartScatterComponent
