const sleeper = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * wrapper for js fetch() that handles 409 and 429 http status codes
 * 
 * @param {string} url the api url 
 * @param {object} options options for the fetch request 
 * @param {*} n maximum retries
 * @param {*} sleep initial delay
 */
export const fetchRequest = (url, options, n = 10, sleep = 0) => {
    return sleeper(sleep).then(()=>{
        return fetch(url, options).then((response) => {
            if(!response.ok && response.status === 409){
                return fetchRequest(url, options, n - 1, 1)
            }
            if(!response.ok && response.status === 429){
                if (n === 1) {
                    throw new Error('maximum retry limit reached')
                }
                return fetchRequest(url, options, n - 1, 1001)
            }
            return response
        
        })
    })
}