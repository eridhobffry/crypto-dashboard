export const convertToChartData = (data) => {
    let arr = []
    let obj = {}
    data.forEach(e => {
        obj = {
            label: e.name,
            data: [
                {
                    x: e.market_cap,
                    y: e.volume_24h,
                    r: e.percent_change_24h,
                },
            ]
        }
        arr.push(obj)
    });

    return arr
}