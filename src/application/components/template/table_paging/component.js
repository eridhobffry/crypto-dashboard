import { Pagination } from 'application/components/atoms'
import { Table } from 'application/components/moleculs'
import React, { useMemo } from 'react'
import styled from 'styled-components'

const TablePaginationWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
`

const TablePagination = ({ cryptoListingsData, pageSize, setCurrentPageStore, currentPage, numberToShow }) => {
    const { totalCount } = cryptoListingsData
    const handleCurrentPage = (page) => {
        const pageStart = page === 1
        const metaData = {
            start: pageStart ? 1 : numberToShow * (page-1),
            limit: numberToShow
        }
        setCurrentPageStore(page, metaData)
    }
    const columns = useMemo(() => [
        {
            Header: 'Rank',
            accessor: 'rank'
        },
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Price',
            accessor: 'price'
        },
        {
            Header: 'Price Change (24h)',
            accessor: 'percent_change_24h'
        },
        {
            Header: 'Market Cap',
            accessor: 'market_cap'
        },
        {
            Header: 'Volume (24h)',
            accessor: 'volume_24h'
        },
    ]);
    return <TablePaginationWrapper>
        <Table
            tableHeight='55vh'
            getCellProps={(cellInfo, theme) => {
                const isNegativ = cellInfo.column.id === 'percent_change_24h' && cellInfo.value.charAt(0) === '-'
                const isNotPriceChange = cellInfo.column.id !== 'percent_change_24h'
                return {
                    style: {
                        color: isNotPriceChange ? theme.color.text : isNegativ ? theme.color.red : theme.color.green,
                        fontWeight: theme.fontWeight.bold
                    },
                }
            }
            }
            columns={columns}
            data={cryptoListingsData.minData}
        />
        <Pagination
            currentPage={currentPage}
            totalCount={totalCount}
            pageSize={pageSize}
            onPageChange={page => handleCurrentPage(page)}
        />
    </TablePaginationWrapper>
}

export default TablePagination
