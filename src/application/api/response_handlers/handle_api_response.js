//every xhr response goes through here, except file upload responses
export const handleApiResponse = (response) => {
    return response.text().then(text => {

        let data

        try{
            data = JSON.parse(text)
        }catch (e){
            data = text
        } 
        
        if(!response.ok){
            return Promise.reject({
                response, 
                data,
                isAuthError: false,
                isConflict: false
            })
        }

        return data
    })
}