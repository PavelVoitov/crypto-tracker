<template>
  <div
      class="absolute z-0 top-0 left-0 w-full h-full bg-red-900 bg-opacity-70 flex items-center justify-center"
      v-if="isOpen"
      @click="closeModal"
  >
    <div class="bg-white z-20 p-4 border-4 border-green-800 rounded-md">
      <span class="bg-amber-300 float-right text-lg font-bold cursor-pointer hover:bg-sky-700" @click="closeModal">&times;</span>
      <p>
        Вы действительно хотите удалить тикер
        <strong><slot></slot></strong>
        <span>?</span>
      </p>
      <button class="bg-green-800 rounded-md">Подтвердить</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      require: true
    },
    selectedTicker: {
      type: Object,
      require: true
    }
  },
  emits: {
    "close-modal": value => typeof value === "boolean"
  },
  methods: {
    closeModal() {
      this.$emit("close-modal", false);
    },
  },
};
</script>