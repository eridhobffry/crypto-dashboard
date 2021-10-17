import React, { Fragment, useMemo } from 'react'
import { convertToChartData } from './helpers'
import { Chart } from 'react-charts'
import ResizableBox from 'application/common/resizeable_box'

const ChartScatterComponent = props => {
    const { cryptoListingsData } = props
    const { minRawData } = cryptoListingsData
    const series = useMemo(
        () => ({
            type: "bubble"
        }),
        []
    )

    const axes = useMemo(
        () => [
            { primary: true, position: "bottom", type: "time" },
            { position: "left", type: "linear", stacked: true }
        ],
        []
    )

    const dataSets = convertToChartData(minRawData)
    const data = useMemo(
        () => dataSets,
        []
    )
    return <Fragment>
        <ResizableBox>
            <Chart data={data} series={series} axes={axes} tooltip responsive />
        </ResizableBox>
    </Fragment>
}

export default ChartScatterComponent
