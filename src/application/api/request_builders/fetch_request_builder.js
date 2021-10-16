import { API_VERSION } from './fetch_handler'

export const fetchRequestBuilder = (apiEndpoint, method = 'POST', payload = {}, useApiKey = true, absolute = false, omitToken = false) => {
    const url = 'http://cors-anywhere.herokuapp.com/' + process.env.REACT_APP_BASE_API_URL + API_VERSION + apiEndpoint
    const apiKey = process.env.REACT_APP_API_KEY
    
    let data = {
        method,
        headers: { 
            'Content-Type': 'application/json',
            'X-CMC_PRO_API_KEY': apiKey,
        },
        mode: 'cors'
    }

    data = method !== 'GET' ? {
        ...data,
        body: JSON.stringify(payload)
    } : data
    
    data.headers = !omitToken ? {
        ...data.headers,
    } : data.headers

    return {
        data,
        url
    }
}

export default fetchRequestBuilder