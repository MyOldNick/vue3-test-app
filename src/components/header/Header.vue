<template>
  <div class="header">
    <p class="header__logo">Currency</p>
  </div>
</template>

<script lang="ts">
//vue
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 10px;
  background-color: rgb(223, 217, 217);
  font-size: 24px;
}

.header__logo {
  cursor: pointer;
  user-select: none;
}
</style>