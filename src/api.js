const API_KEY = "bb3eff272170bd47092ebf70e844878f9e4c5f9165b84affa4a28873af30b613";

const tickersHandlers = new Map

export const loadTickers = () => {
    if (tickersHandlers.size === 0) {
        return
    }
    return fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${[...tickersHandlers.keys()].join(',')}&tsyms=USD&api_key=${API_KEY}`)
        .then(res => res.json())
        .then(rawData => {
            const updatedPrices = Object.fromEntries(
                    Object.entries(rawData).map(([key, value]) => [key, value.USD])
            )
            Object.entries(updatedPrices).forEach(([currency, newPrice]) => {
                const handlers = tickersHandlers.get(currency) ?? []
                handlers.forEach((fn) => fn(newPrice))
            })
            }

        )
}


export const subscribeToTicker = (ticker, cb) => {
    const subscribers = tickersHandlers.get(ticker) || []
    tickersHandlers.set(ticker, [...subscribers, cb])
}

export const unsubscribeToTicker = (ticker) => {
    tickersHandlers.delete(ticker)
    // const subscribers = tickersHandlers.get(ticker) || []
    // tickersHandlers.set(ticker, subscribers.filter(fn => fn !== cb))
}

setInterval(loadTickers, 5000)

window.tickers = tickersHandlers
