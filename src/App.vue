<template>
  <div>
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  mounted () {
    // this.$q.dark.set(true)
  }
})
</script>

<style>
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";
</style>
