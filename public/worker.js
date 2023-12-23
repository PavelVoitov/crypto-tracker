import {subscribeToTicker, unsubscribeFromTicker} from "@/api";

const ports = []

self.addEventListener('connect', e => {
    const port = e.ports[0]
    if (!ports.find(p => p.id === 'uniq')) {
        port['id'] = 'uniq'
    }

    ports.push(port)
    port.start()

    setInterval(() => port.postMessage('Hello'), 2000)
    port.addEventListener('message', e => {

        ports.forEach(p => {
            if (ports.indexOf(p) === 0) {
                p.postMessage({id: e.data.id, origin: 'num', port: 'You are zero!'})
            } else {
                p.postMessage({id: e.data.id, origin: 'num', port: `You are ${ports.indexOf(port)}`})
            }

        })
    })
})



