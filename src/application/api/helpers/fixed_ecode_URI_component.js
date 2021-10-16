export const fixedEncodeURIComponent = (params) => {
    let searchParamsDefault = ''
    if (params.search !== '') {
        searchParamsDefault = '?s='
        return searchParamsDefault + encodeURIComponent(params.search).replace(/[!'()*]/g, (c) => {
            return '%' + c.charCodeAt(0).toString(16)
        })
    } else {
        return searchParamsDefault = ''
    }
}