export const handleApiFilestreamResponse = (response) => {
    return response.clone().text().then(text => {
        if (!response.ok) {
            return Promise.reject({
                response,
                data: null,
                isAuthError: false,
                isConflict: false
            })
        }

        return response.blob()
    })
}