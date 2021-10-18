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

export const useConvertToChartDataSets = (payload) => {
    let labels = []
    let datasets = []
    let obj = {}
    let data = {}
    payload.forEach((e) => {
        const borderColor = random_rgb_a().rgb
        const backgroundColor = random_rgb_a().rgba
        obj = {
            label: e.name,
            data: [
                {
                    x: e.market_cap,
                    y: e.volume_24h,
                    r: e.percent_change_24h,
                },
            ],
            borderColor,
            backgroundColor,
            borderWidth: 2
        }
        labels.push(e.name)
        datasets.push(obj)
    });
    data = {
        labels,
        datasets
    }
    const options = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        var label = context.dataset.label || '';
                        if (label) {
                            label += ' 🥑 \r';
                        }
                        if (context.parsed.x !== null) {
                            label += 'Market Cap: 〽️ ' + new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.x) + ' - ';
                        }
                        if (context.parsed.y !== null) {
                            label += 'Volume: 🧪 ' + new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y) + ' - ';
                        }
                        if (context.parsed._custom !== null) {
                            label += 'Price Change (24H): ♻️ ' + context.parsed._custom + ' %';
                        }
                        return label;
                    }
                }
            },
            legend: {
                display: true,
                labels: {
                    fontColor: 'black',
                    family: 'sans-serif',
                    weight: '800'
                },
                position: 'bottom'
            },
        },
        legend: {
            display: false,
            labels: {
                fontColor: 'black',
                family: 'sans-serif',
                weight: '800'
            },
            position: 'bottom'
        },
        layout: {
            padding: 50
        },
    }
    
    return {
        data,
        options,
    }
}

export function random_rgb_a() {
    var o = Math.round, r = Math.random, s = 255;
    let red = o(r() * s)
    let green = o(r() * s)
    let blue = o(r() * s)

    const rgb = 'rgb(' + red + ',' + green + ',' + blue + ')';
    const rgba = 'rgba(' + red + ',' + green + ',' + blue + ', 0.5 )';
    return {
        rgb,
        rgba
    }
}