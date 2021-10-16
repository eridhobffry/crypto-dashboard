import { fetchHandler, HTTP_METHOD, limiter } from 'application/api/request_builders'
import { fetchRequestBuilder } from 'application/api/request_builders'
import { handleApiResponse } from 'application/api/response_handlers'

export const getListingCrytoCurrency = (start = 1, limit = 100, sortBy = 'market_cap', sortDir = 'desc') => {
    const request = fetchRequestBuilder(`cryptocurrency/listings/latest?start=${start}&limit=${limit}&sort=${sortBy}&sort_dir=${sortDir}`, HTTP_METHOD.GET)

    return limiter.schedule(() => fetchHandler(request.url, request.data))
        .then(handleApiResponse)
}