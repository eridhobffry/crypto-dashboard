
export function handleError(e, action = { type: 'DEFAULT' }) {
    let message = 'Unexpected error'

    if (e.data !== undefined
        && e.data !== null
        && e.data.reasonMessage !== undefined
        && e.data.reasonMessage !== ''
        && e.data.reasonMessage !== null
    ) {
        message = e.data.reasonMessage
    }
    if (e.response !== undefined && e.response !== null && e.response.status === 401) {
        console.log('ER:: error,', message)
    } else {
        if (!e.isAuthError && !e.isConflict && !e.isOverRateLimit) {
            console.log('ER:: error,', message)
        } else {
            console.log('ER:: error,', message)
        }
    }
}