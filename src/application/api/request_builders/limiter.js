import Bottleneck from 'bottleneck'
import { FetchError } from 'application/api/request_builders/fetch_handler'

const limiter = new Bottleneck({
    minTime: 0,
    maxConcurrent: 5,
    reservoir: 8,
    reservoirRefreshAmount: 8,
    reservoirRefreshInterval: 2000
})

limiter.on('failed', async (error, jobInfo) => {
    //only instances of the FetchError class should be handled by bottleneck
    if(!(error instanceof FetchError)){
        throw(error)
    }

    const { status } = error.response

    if(status === 503 || status === 204) {
        if (jobInfo.retryCount < 9) {  //for 503/204 status code try 10 times...
            return 1000                 //...with a delay of 1000 ms
        }
        return null
    }else if(jobInfo.retryCount < 2){   //for other cases try 3 times...
        return 200                     //...with a delay of 200 ms
    }

    return null
})

const tokenLimiter = new Bottleneck({
    minTime: 0,
    maxConcurrent: 1,
    reservoir: 1,
    reservoirRefreshAmount: 1,
    reservoirRefreshInterval: 1250
})

const oneLimiter = new Bottleneck({
    minTime: 0,
    maxConcurrent: 1,
    reservoir: 1,
    reservoirRefreshAmount: 1,
    reservoirRefreshInterval: 1500
})

export {
    limiter,
    tokenLimiter,
    oneLimiter
}