<template>
  <component :is="activeLayout">
    <router-view />
  </component>
</template>

<script lang="ts">
//vue
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
//layouts
import Default from "@/layouts/Default.vue";

export default defineComponent({
  name: "App",
  componens: {
    Default,
  },
  setup() {
    //hooks
    const route = useRoute();

    const activeLayout = computed(() => route.meta.layout || Default);

    return {
      activeLayout,
    };
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
