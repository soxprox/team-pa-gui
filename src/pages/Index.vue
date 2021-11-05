<template>
  <HeroHeader />
</template>

<script>
import HeroHeader from 'components/splash/HeroHeader.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { HeroHeader },
  name: 'PageIndex'
})
</script>
