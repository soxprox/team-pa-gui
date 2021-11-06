<template>
  <q-breadcrumbs active-color="white" style="font-size: 16px">
    <template v-slot:separator>
      <q-icon size="1.2em" name="arrow_forward" color="white" />
    </template>
    <q-breadcrumbs-el label="Home" icon="home" />
    <q-breadcrumbs-el v-for="(crumb, index) in breadcrumbs" :key="index" :label="crumb.label" :icon="crumb.icon" />
  </q-breadcrumbs>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('site', ['breadcrumbs'])
  }
};
</script>

<style></style>
