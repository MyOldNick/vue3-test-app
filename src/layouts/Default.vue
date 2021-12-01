<template>
  <div class="default-layout">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
//vue
import { defineComponent } from "vue";
//components
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";

export default defineComponent({
  name: "Default",
  components: {
    Header,
    Footer,
  },
});
</script>

<style scoped>
.default-layout {
  display: grid;
  grid-template-rows: 60px auto 300px;
  min-height: 100vh;
}
</style>