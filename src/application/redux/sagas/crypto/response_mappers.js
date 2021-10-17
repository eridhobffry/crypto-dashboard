export const responseCryptoDataMapper = (data) => {
    let arr = []
    let obj = {}
    data.forEach(e => {
        obj = {
            id: e.id,
            date_added: e.date_added,
            last_updated: e.last_updated,
            rank: e.cmc_rank,
            name: e.name,
            price: '$ ' + (Math.round(e.quote.USD.price * 100) / 100).toFixed(2),
            percent_change_24h: (Math.round(e.quote.USD.percent_change_24h * 100) / 100).toFixed(2) + '%',
            market_cap: '$ ' + numberWithCommas(Math.trunc(e.quote.USD.market_cap)),
            volume_24h: '$ ' + numberWithCommas(Math.trunc(e.quote.USD.volume_24h)),
        }
        arr.push(obj)
    });

    return arr
}
export const responseCryptoRawDataMapper = (data) => {
    let arr = []
    let obj = {}
    data.forEach(e => {
        obj = {
            id: e.id,
            date_added: e.date_added,
            last_updated: e.last_updated,
            rank: e.cmc_rank,
            name: e.name,
            price: e.quote.USD.price,
            percent_change_24h: e.quote.USD.percent_change_24h,
            market_cap: e.quote.USD.market_cap,
            volume_24h: e.quote.USD.volume_24h,
        }
        arr.push(obj)
    });

    return arr
}

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}