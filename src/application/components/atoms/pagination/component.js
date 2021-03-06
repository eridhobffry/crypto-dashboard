import React from 'react';
import { usePagination, DOTS } from './use_pagination';
import { Arrow, PaginationContainer, PaginationItem } from './styles';

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    // let lastPage = paginationRange[paginationRange.length - 1];
    return <PaginationContainer>
        <PaginationItem
            onClick={onPrevious}
        >
            <Arrow left />
        </PaginationItem>
        {paginationRange.map(pageNumber => {
            if (pageNumber === DOTS) {
                return <PaginationItem className='dots'>&#8230;</PaginationItem>;
            }

            return (
                <PaginationItem selected={pageNumber === currentPage}
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </PaginationItem>
            );
        })}
        <PaginationItem
            onClick={onNext}
        >
            <Arrow />
        </PaginationItem>
    </PaginationContainer>
};

export default Pagination;
