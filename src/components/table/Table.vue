<template>
  <table v-if="currency" class="table">
    <thead class="table__head">
      <tr>
        <th>Дата</th>
        <th>Курс</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="[key, value] in rates" :key="key">
        <td>{{ key }}</td>
        <td>{{ value[currency] || 'нет данных' }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang='ts'>
//vue
import { defineComponent } from "vue";

export default defineComponent({
  name: "Table",
  props: ["currency", "rates"],
});
</script>

<style scoped>
.table {
  width: 100%;
  border: 1px solid rgb(221, 221, 221);
  font-size: 24px;
  text-align: center;
  border-radius: 10px;
}

.table__head {
  font-size: 30px;
}
</style>