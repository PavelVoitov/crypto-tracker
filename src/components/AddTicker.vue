<template>
  <section>
    <div class="flex">
      <div class="max-w-xs">
        <label for="wallet" class="block text-md font-medium text-gray-900"
        >Ticker: {{ ticker }}</label
        >
        <div class="mt-1 relative rounded-md shadow-md">
          <input
              v-model="ticker"
              @keydown.enter="add"
              @input="findSimilarTicker(ticker)"
              type="text"
              name="wallet"
              id="wallet"
              class="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-green-800 focus:border-gray-500 sm:text-sm rounded-md"
              placeholder="For example DOGE"
          />
        </div>
        <div class="flex p-1 rounded-mdflex-wrap "
        >
            <span
                v-for="currency in listSimilarTickers"
                v-on:click="findSimilarTicker(currency)"
                :key="currency"
                class="inline-flex items-center px-2 py-0.5 m-1 rounded-md text-xs font-medium bg-green-800 text-white cursor-pointer">
              {{ currency }}
            </span>
        </div>
        <div v-if="!isCurrentTicker"
             class="text-sm text-red-600">
          No ticker data
        </div>

        <div
            v-if="isAddedTicker"
            class="text-sm text-red-600">
          This ticker has been added
        </div>

      </div>
    </div>
    <add-button
        @click="add"
        :disabled="disabled || ticker === ''"/>
  </section>
</template>
<script>
import AddButton from './AddButton'

export default {
  components: {
    AddButton
  },

  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: true
    },
    isCurrentTicker: {
      type: Boolean,
      required: false,
      default: true
    },
    listSimilarTickers: {
      type: Array,
      required: false,
    },
    isAddedTicker: {
      type: Boolean,
      required: false
    }
  },
  emits: {
    "add-ticker": value => typeof value === 'string',
    "find-similar-ticker": value => typeof value === "string"
  },


  data() {
    return {
      ticker: '',
    }
  },
  methods: {
    async add() {
      await this.$emit('add-ticker', this.ticker)
      if (this.isAddedTicker === true || this.isCurrentTicker === false) {
        return
      } else this.ticker = ''
    },
    findSimilarTicker(ticker) {
      this.ticker = ticker
      this.$emit('find-similar-ticker', ticker)
    }
  }
}
</script>
