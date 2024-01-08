<template>
  <section>
    <div class="flex">
      <div class="max-w-xs">
        <label for="wallet" class="block text-sm font-medium text-gray-700"
        >Тикер {{ ticker }}</label
        >
        <div class="mt-1 relative rounded-md shadow-md">
          <input
              v-model="ticker"
              @keydown.enter="add"
              @input="findSimilarTicker(ticker)"
              type="text"
              name="wallet"
              id="wallet"
              class="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
              placeholder="Например DOGE"
          />
        </div>
        <div class="flex bg-white shadow-md p-1 rounded-md shadow-md flex-wrap "
        >
            <span
                v-for="currency in listSimilarTickers"
                v-on:click="findSimilarTicker(currency)"
                :key="currency"
                class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
              {{ currency }}
            </span>
        </div>
        <div v-if="!isCurrentTicker"
             class="text-sm text-red-600">
          Введенный тикер отсутсвует в базе данных
        </div>

        <div
            v-if="isAddedTicker"
            class="text-sm text-red-600">
          Такой тикер уже добавлен
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
