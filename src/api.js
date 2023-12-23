const API_KEY = "bb3eff272170bd47092ebf70e844878f9e4c5f9165b84affa4a28873af30b613";

export let tickersHandlers = new Map
const socket = new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${API_KEY}`)


export const worker = new SharedWorker("/worker.js")


worker.port.start(); // this will trigger the on connect event on the webworker
// this will also start the worker IF this is the first call!

// recieve message from worker
worker.port.addEventListener('message', message => {
    console.log(message.data);

});

// send a mesasge to the worker
export const sendMessage = (tickerName) => {
    // eslint-disable-next-line no-debugger
    // debugger
    worker.port.postMessage({id: 'uniq', name: tickerName})
    console.log(tickerName)
}




const AGGREGATE_INDEX = "5"
const INCORRECT_COUPLE_CURRENCY = "500"
let priceBitcoinToUSD;

const getCurrencyFromTickerHandlers = (currency) => {
    return tickersHandlers.get(currency) ?? []
}

socket.addEventListener('message', e => {
    const {TYPE: type, FROMSYMBOL: currency, PRICE: newPrice, PARAMETER: parameter, TOSYMBOL: toCurrency,
        MESSAGE: message
    } = JSON.parse(e.data)

    if ((type !== AGGREGATE_INDEX && type !== INCORRECT_COUPLE_CURRENCY) ) {
        return
    }

    if (message === "SUBSCRIPTION_ALREADY_ACTIVE") {
        return
    }

    if (type === INCORRECT_COUPLE_CURRENCY) {
        const currency = parameter.split('~')[2]
        const targetCurrency = parameter.split('~')[3]
        if (targetCurrency === 'BTC') {
            const handlers = getCurrencyFromTickerHandlers(currency)
            handlers.forEach(fn => fn(null))
            tickersHandlers.set(currency, [])
        }
        if (targetCurrency === 'USD') {
            subscribeToTickerOnWs("BTC")
            subscribeToTickerOnWs(currency, 'BTC')
        }
    }

   if (toCurrency === "USD") {
       // eslint-disable-next-line no-debugger
       // debugger
       if (currency === "BTC") {
           priceBitcoinToUSD = newPrice
       }
       const handlers = getCurrencyFromTickerHandlers(currency)
       handlers.forEach((fn) => fn(newPrice))
   }

   if (toCurrency === "BTC") {
       const handlers = getCurrencyFromTickerHandlers(currency)
       if (priceBitcoinToUSD !== undefined) {
           handlers.forEach(fn => fn(newPrice * priceBitcoinToUSD))
       }
   }

})


const sendToWebSocket = (message) => {
    const stringifiedMessage = JSON.stringify(message)
    if (socket.readyState === socket.OPEN) {
        socket.send(stringifiedMessage)
    }
    socket.addEventListener('open', () => socket.send(stringifiedMessage), {once: true})
}

const subscribeToTickerOnWs = (ticker, costToTicker = 'USD') => {
    sendToWebSocket({
        "action": "SubAdd",
        "subs": [`${AGGREGATE_INDEX}~CCCAGG~${ticker}~${costToTicker}`]
    })
}

export const subscribeToTicker = (ticker, cb) => {
    const subscribers = tickersHandlers.get(ticker) || []
    tickersHandlers.set(ticker, [...subscribers, cb])
    subscribeToTickerOnWs(ticker)
}

export const unsubscribeFromTicker = (ticker, costToTicker = 'USD') => {
    sendToWebSocket({
        "action": "SubRemove",
        "subs": [`${AGGREGATE_INDEX}~CCCAGG~${ticker}~${costToTicker}`]
    })
}


