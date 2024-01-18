<template>
  <div
      class="fixed z-10 top-0 left-0 w-full h-full bg-red-900 bg-opacity-70 flex items-center justify-center"
      @click="closeModal"
  >
    <div
        class="bg-white z-20 p-4 border-4 border-green-800 rounded-md"
        @click.stop
    >
      <button class="bg-green-500 rounded-md px-1 float-right text-lg font-bold cursor-pointer hover:bg-green-700" @click="closeModal">&times;</button>
      <p>
        Вы действительно хотите удалить тикер
        <strong>
          <slot name="tickerName" :ticker="tickerForDeleting.name"></slot>
        </strong>
        <span>?</span>
      </p>
      <button
          class="bg-green-800 rounded-md text-white mt-4 px-4 py-2 cursor-pointer"
          @click="confirmDelete"
      >
        Подтвердить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tickerForDeleting: {
      type: Object,
      require: true
    }
  },
  emits: {
    "confirm-delete": value => typeof value === "object",
    "close-modal": value => typeof value === "boolean"
  },
  methods: {
    confirmDelete() {
      this.$emit("confirm-delete", this.tickerForDeleting)
    },
    closeModal() {
      this.$emit("close-modal", false);
    },
    handleKeyDown(e) {
      if (e.key === "Escape") {
        this.closeModal()
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeyDown)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }
};
</script>