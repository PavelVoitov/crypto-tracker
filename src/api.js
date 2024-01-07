const tickersHandlers = new Map
let copiedData = ''


const worker = new SharedWorker('./sharedWorker.js')

worker.port.onmessage = function (event) {
    let {ticker, price} = event.data;
    if(price === copiedData.price && ticker === copiedData.ticker) return
    copiedData = event.data
    const handlers = tickersHandlers.get(ticker) ?? []
        handlers.forEach(fn => fn(price))
}


export const subscribeToTicker = (ticker, cb) => {
    const subscribers = tickersHandlers.get(ticker) || []
    tickersHandlers.set(ticker, [...subscribers, cb])
    worker.port.postMessage({ticker, action: "subscribe"})
}

export const unsubscribeFromTicker = ticker => {
    tickersHandlers.delete(ticker)
    worker.port.postMessage({ticker, action: "unsubscribe"})
}

export const getListAvailableCryptoCurrencies = async () => {
  const res = await fetch('https://min-api.cryptocompare.com/data/all/coinlist?summary=true')
    const data = await res.json()
    return data.Data
}









