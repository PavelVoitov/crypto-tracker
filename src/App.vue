<template>
  <div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
    <app-loader v-if="loader === true"/>
    <div class="container">
      <add-ticker
          @add-ticker="add"
          @find-similar-ticker="findSimilarTicker"
          :disabled="tooManyTickersAdded"
          :isCurrentTicker="isCurrentTicker"
          :listSimilarTickers="listSimilarTickers"
          :isAddedTicker="isAddedTicker"
      />
      <template v-if="tickers.length">
        <hr class="w-full border-t border-gray-600 my-4"/>
        <div>
          Фильтрация:
          <input
              v-model="filter"
              class="border-x-0 border-t-0 focus:outline-none"
          />
          <button
              v-if="page > 1"
              @click="page = page - 1"
              class="my-4 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <img src="./assets/images/arrow-left.png" alt="arrow to left" class="w-3 h-3">
          </button>
          <button
              v-if="hasNextPage"
              @click="page = page + 1"
              class="my-4 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <img src="./assets/images/arrow-right.png" alt="arrow to right" class="w-3 h-3">
          </button>
        </div>
        <hr class="w-full border-t border-gray-600 my-4"/>
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <ticker-card
              :paginatedTickers = paginatedTickers
              :selectedTicker = selectedTicker
              @select-ticker = "select"
              @delete-ticker = "handleDelete"
          />
        </dl>
        <hr class="w-full border-t border-gray-600 my-4"/>
      </template>
      <graph-prices
          v-if="selectedTicker"
          :selectedTicker="selectedTicker"
          :graphData="graph"
          @close-graph="selectedTicker = null"
      />
    </div>
  </div>
</template>

<script>
import {getListAvailableCryptoCurrencies, subscribeToTicker, unsubscribeFromTicker} from "@/api";
import AddTicker from '@/components/AddTicker'
import GraphPrices from '@/components/GraphPrices'
import TickerCard from "@/components/TickerCard";
import AppLoader from "@/components/AppLoader";

export default {
  name: 'App',

  components: {
    AppLoader,
    TickerCard,
    AddTicker,
    GraphPrices
  },

  data() {
    return {
      ticker: '',
      filter: '',

      tickers: [],
      selectedTicker: null,

      graph: [],

      page: 1,

      listCryptoCurrency: {},
      listSimilarTickers: [],
      isAddedTicker: false,
      isCurrentTicker: true,
      loader: true,
    }
  },
  computed: {
    startIndex() {
      return (this.page - 1) * 6
    },
    endIndex() {
      return this.page * 6
    },
    filteredTickers() {
      return this.tickers.filter(t => t.name.includes(this.filter))
    },
    paginatedTickers() {
      return this.filteredTickers.slice(this.startIndex, this.endIndex)
    },
    hasNextPage() {
      return this.filteredTickers.length > this.endIndex
    },
    tooManyTickersAdded() {
      return this.ticker.length > 30
    },
    // hasCurrentTicker() {
    //   return this.listSimilarTickers.includes(this.ticker.name)
    // },
  },
  methods: {
    updateTicker(tickerName, price) {
      this.tickers
          .filter(t => t.name === tickerName)
          .forEach(t => {
            if (t === this.selectedTicker) {
              this.graph.push(price)
            }
            if (price === null) {
              t.price = '-'
              t.costStatus = 'empty'
            } else {
              t.costStatus = 'full'
              t.price = price
            }
          })
      localStorage.setItem('crypto-list', JSON.stringify(this.tickers))
    },
    formatPrice(price) {
      if (price === '-') {
        return price
      }
      return price > 1 ? price.toFixed(2) : price.toPrecision(2)
    },
    add(ticker) {
      const currentTicker = {
        name: ticker,
        price: "-"
      }
      if (this.tickers.find(t => t.name === currentTicker.name)) {
        return this.isAddedTicker = true
      }
      if (!this.listSimilarTickers.includes(currentTicker.name)) {
        return this.isCurrentTicker = false
      }
      this.tickers = [...this.tickers, currentTicker]
      subscribeToTicker(currentTicker.name, (newPrice) => {
        this.updateTicker(currentTicker.name, newPrice)
      })
      this.filter = ''
      this.listSimilarTickers = []
      this.isAddedTicker = false


    },
    handleDelete(tickerToRemove) {
      this.tickers = this.tickers.filter(t => t !== tickerToRemove)
      localStorage.setItem('crypto-list', JSON.stringify(this.tickers))
      if (this.selectedTicker === tickerToRemove) {
        this.selectedTicker = null
      }
      unsubscribeFromTicker(tickerToRemove.name)
    },
    select(t) {
      this.selectedTicker = t
    },
    findSimilarTicker(ticker) {
      this.isCurrentTicker = true
      this.isAddedTicker = false
      const currencies = Object.keys(this.listCryptoCurrency);

      // filtering currencies by entered characters
      const filteredCurrencies = currencies.filter(currency => currency.includes(ticker));

      // get 4 currencies from the filtered list
      this.listSimilarTickers = filteredCurrencies.slice(0, 4)
    }
  },
  watch: {
    selectedTicker() {
      this.graph = []
    },
    paginatedTickers() {
      if (this.paginatedTickers.length === 0 && this.page > 1) {
        this.page -= 1
      }
    },
    filter() {
      this.page = 1
    },
    pageStateOptions(v) {
      window.history.pushState(null, document.title, `${window.location.pathname}?filter=${v.filter}&page=${v.page}`)
    },
    tickers() {
      localStorage.setItem('crypto-list', JSON.stringify(this.tickers))
    },
  },
  created: async function () {
    const windowData = Object.fromEntries(new URL(window.location).searchParams.entries())

    if (windowData.filter) {
      this.filter = windowData.filter
    }

    if (windowData.page) {
      this.page = Number(windowData.page)
    }

    const tickersData = localStorage.getItem('crypto-list')

    if (tickersData) {
      this.tickers = JSON.parse(tickersData)
      this.tickers.forEach(t => {
            subscribeToTicker(t.name, (newPrice) => {
              this.updateTicker(t.name, newPrice)
            })
          }
      )
    }

    this.listCryptoCurrency = await getListAvailableCryptoCurrencies()
    this.loader = false
  },
}

</script>

<style>
</style>
