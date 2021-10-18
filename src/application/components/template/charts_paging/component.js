import React from 'react'
import styled from 'styled-components'
import { ChartScatter } from 'application/components/moleculs'
import { Pagination } from 'application/components/atoms'
const ChartPaginationWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
`
const ChartPagingComponent = props => {
    const { cryptoListingsData, currentPage, pageSize, numberToShow, setCurrentPageStore } = props
    const { totalCount } = cryptoListingsData
    const handleCurrentPage = (page) => {
        const pageStart = page === 1
        const metaData = {
            start: pageStart ? 1 : numberToShow * (page - 1),
            limit: numberToShow
        }
        setCurrentPageStore(page, metaData)
    }
    return <ChartPaginationWrapper>
        <ChartScatter cryptoListingsData={cryptoListingsData} />
        <Pagination
            currentPage={currentPage}
            totalCount={totalCount}
            pageSize={pageSize}
            onPageChange={page => handleCurrentPage(page)}
        />
    </ChartPaginationWrapper>
}

export default ChartPagingComponent
