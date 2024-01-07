const API_KEY = "bb3eff272170bd47092ebf70e844878f9e4c5f9165b84affa4a28873af30b613";

const socket = new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${API_KEY}`)

const AGGREGATE_INDEX = "5"
const INCORRECT_COUPLE_CURRENCY = "500"
let priceBitcoinToUSD;


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

const unSubscribeToTickerOnWs = (ticker, costToTicker = 'USD') => {
  sendToWebSocket(
    {
      "action": "SubRemove",
      "subs": [`${AGGREGATE_INDEX}~CCCAGG~${ticker}~${costToTicker}`]
    })
}

self.addEventListener('connect', e => {
  const port = e.ports[0]
  port.start()

  port.addEventListener('message', e => {
    let {ticker, action} = e.data
    if (action === 'subscribe') {
      subscribeToTickerOnWs(ticker)
    } else {
      unSubscribeToTickerOnWs(ticker)
    }
    socket.addEventListener('message', e => {
      const {
        TYPE: type, FROMSYMBOL: currency, PRICE: newPrice, PARAMETER: parameter, TOSYMBOL: toCurrency,
        MESSAGE: message
      } = JSON.parse(e.data)

      if ((type !== AGGREGATE_INDEX && type !== INCORRECT_COUPLE_CURRENCY)) {
        return
      }

      if (message === "SUBSCRIPTION_ALREADY_ACTIVE") {
        return
      }

      if (type === INCORRECT_COUPLE_CURRENCY) {
        const currency = parameter.split('~')[2]
        const targetCurrency = parameter.split('~')[3]
        if (targetCurrency === 'BTC') {
          port.postMessage({ticker: currency, price: null})
        }
        if (targetCurrency === 'USD') {
          subscribeToTickerOnWs("BTC")
          subscribeToTickerOnWs(currency, 'BTC')
        }
      }

      if (toCurrency === "USD") {
        if (currency === "BTC") {
          priceBitcoinToUSD = newPrice
        }
        port.postMessage({ticker: currency, price: newPrice})
      }

      if (toCurrency === "BTC") {
        if (priceBitcoinToUSD !== undefined) {
          port.postMessage({ticker: currency, price: newPrice * priceBitcoinToUSD})
        }
      }
    })
  })
})



