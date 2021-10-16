export const createFilterQuery = (filters) => {
    let query = filters.some(filter => filter.isActive) ? '?' : ''

    filters.forEach((filter, index) => {
        if(filter.isActive){
            query += filter.query
            if(index < filters.length - 1){
                query += '&'
            }
        }
    })  

    return query
}