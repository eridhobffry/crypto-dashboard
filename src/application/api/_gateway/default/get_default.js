import { fetchHandler, HTTP_METHOD, limiter } from 'application/api/request_builders'
import { fetchRequestBuilder } from 'application/api/request_builders'
import { handleApiResponse } from 'application/api/response_handlers'

export const getDefault = () => {
    const request = fetchRequestBuilder('/default', HTTP_METHOD.GET)

    return limiter.schedule(() => fetchHandler(request.url, request.data))
        .then(handleApiResponse)
}