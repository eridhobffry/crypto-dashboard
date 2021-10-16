export const downloadFile = (url, fileName) => {
    var a = document.createElement('a')
    a.href = url
    a.download = fileName
    document.body.appendChild(a) 
    a.click()    
    a.remove()
}

export const getDownloadUrl = (blob) => {
    return window.URL.createObjectURL(blob)
}

export default downloadFile