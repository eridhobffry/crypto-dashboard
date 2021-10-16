import i18next from 'i18next'
import { accessTokenRegistered } from 'application/storage'
import { buildApiUrl } from 'application/api/helpers'

export const fetchRequestBuilder = (apiEndpoint, method = 'POST', payload = {}, useApiKey = true, absolute = false, omitToken = false, storage = accessTokenRegistered) => {
    const url = buildApiUrl(apiEndpoint, absolute)
    const apiKey = process.env.REACT_APP_API_KEY
    const applicationKey = process.env.REACT_APP_APPLICATION_KEY
    
    let data = {
        method,
        headers: { 
            'Content-Type': 'application/json',
            'Accept-Language': i18next.language,
            'X-Application-Key': applicationKey,
            'X-API-Key': apiKey,
        },
        mode: 'cors'
    }

    data = method !== 'GET' ? {
        ...data,
        body: JSON.stringify(payload)
    } : data
    
    data.headers = !omitToken ? {
        ...data.headers,
        'Authorization': 'Bearer ' + storage.get(),
    } : data.headers

    return {
        data,
        url
    }
}

export default fetchRequestBuilder