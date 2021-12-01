<template>
  <div class="home container">
    <Combobox
      @chooseCurrency="setActiveCurrency"
      :allCurrencies="Store.allСurrencies.value"
      :activeCurrency="Store.currentCurrency.value"
      class="home__combobox"
    />
    <Datepicker
      v-model="date"
      range
      :partialRange="false"
      :enableTimePicker="false"
      :minDate="new Date('01.01.2005')"
      :maxDate="new Date()"
      class="home__datepicker"
    />
    <Table
      :currency="Store.currentCurrency.value"
      :rates="ratesArray"
      class="home__table"
    />
  </div>
</template>

<script lang="ts">
//vue
import { defineComponent, onMounted, computed, ref, watch } from "vue";
//components
import Combobox from "@/components/combobox/Combobox.vue";
import Table from "@/components/table/Table.vue";
//store
import Store from "@/store";

export default defineComponent({
  name: "Home",
  components: {
    Combobox,
    Table,
  },
  setup() {
    //state
    const date = ref([
      new Date().toLocaleDateString(),
      new Date().toLocaleDateString(),
    ]);
    const ratesArray = computed(() => Object.entries(Store.rates));

    //hooks
    onMounted(() => {
      findRates();
    });

    watch(date, (newVal) => {
      if (newVal) findRates();
    });

    //methods
    const setActiveCurrency = (currency: string): string =>
      Store.setCurrentCurrency(currency);

    const findRates = (): void => {
      Store.getHistoricalData(
        new Date(date.value[0]).toLocaleDateString("en-CA"),
        new Date(date.value[1]).toLocaleDateString("en-CA")
      );
    };

    return {
      Store,
      setActiveCurrency,
      ratesArray,
      date,
    };
  },
});
</script>

<style scoped>
.home__combobox {
  margin-top: 50px;
}

.home__table {
  margin: 50px auto;
}

.home__datepicker {
  margin-top: 20px;
}
</style>
