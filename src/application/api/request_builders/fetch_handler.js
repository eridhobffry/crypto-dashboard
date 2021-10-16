export const HTTP_METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

export const API_VERSION = 'v1/'

/**
 * Fetch Error Object that contains the http response 
 * 
 * @param {string} message the error message, inherited from Error 
 * @param {object} response the http response object
 */
export class FetchError extends Error {
    constructor(message, response) {
        super(message)
        this.response = response
    }
}


/**
 * wrapper for js fetch() that handles status codes and delegates the response to bottleneck
 * 
 * @param {string} resource the api url 
 * @param {object} init options for the fetch request 
 * @param {array} retryStatusCodes status codes that should trigger n retries via bottleneck
 */
export const fetchHandler = async (resource, init, retryStatusCodes = []) => {
    const bypassableStatusCodes = [500, 404, 403, 401, 400, 406, 423] //status codes that bypass bottleneck, if not included in retryStatusCodes[]

    const response = await fetch(resource, init)
    if (retryStatusCodes.includes(response.status)) {
        throw new FetchError(response.status, response)
    }

    if (!response.ok && !bypassableStatusCodes.includes(response.status)) {
        throw new FetchError(response.status, response)
    }
    
    return response
}