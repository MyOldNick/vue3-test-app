<template>
  <div class="combobox" id="combobox">
    <input
      class="combobox__input"
      type="text"
      :value="activeCurrency"
      disabled
    />
    <div
      @click="openList(!isOpen)"
      :class="['combobox__input-btn', { 'combobox__input-btn-active': isOpen }]"
    >
      &#9660;
    </div>
    <div v-if="isOpen" class="combobox__list">
      <p
        @click="setActiveCurrency(el)"
        class="combobox__list-item"
        v-for="el in allCurrencies"
        :key="el"
      >
        {{ el }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
//vue
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
  name: "Combobox",
  props: ["allCurrencies", "activeCurrency"],
  setup(props, ctx) {
    //state
    const isOpen = ref<boolean>(false);

    //hooks
    onMounted(() => {
      document.addEventListener("click", handleClick);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClick);
    });

    //methods
    const openList = (value: boolean): boolean => (isOpen.value = value);

    const setActiveCurrency = (currency: string): void => {
      openList(false);

      ctx.emit("chooseCurrency", currency);
    };

    //стоит эни, так как если мы добавим типа ивента, то почему-то ругается на отсутствие path, хотя он и есть
    //path отсутствует в некоторых браузерах, но для тестового пойдет
    const handleClick = ({ path }: any): void => {

      if (!path.find(({ id }: HTMLElement) => id === "combobox")) {
        openList(false);
      }

    };

    return {
      isOpen,
      openList,
      setActiveCurrency,
    };
  },
});
</script>

<style scoped>
.combobox {
  position: relative;
  width: 100%;
}

.combobox__input {
  width: 100%;
  height: 60px;
  padding: 10px;
  font-size: 30px;
  background-color: white;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
}

.combobox__input-btn {
  content: "";
  position: absolute;
  right: 30px;
  top: 15px;
  color: black;
  font-size: 30px;
  cursor: pointer;
  user-select: none;
}

.combobox__input-btn-active {
  transform: rotate(180deg);
}

.combobox__list {
  position: absolute;
  top: 70px;
  width: 100%;
  min-height: 30px;
  max-height: 300px;
  overflow: auto;
  background-color: white;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  padding: 5px;
  z-index: 10;
}

.combobox__list-item {
  padding: 0 5px;
}

.combobox__list-item:hover {
  color: white;
  background-color: rgb(24, 118, 210);
  user-select: none;
  cursor: pointer;
}
</style>