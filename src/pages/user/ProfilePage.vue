<template>
  <q-page padding>
    Profile page
  </q-page>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions('site',['setBreadCrumbs'])
  },
  mounted: function () {
    this.setBreadCrumbs([
      {
        label: 'User',
        icon: 'person',
      },
      {
        label: 'Profile',
        icon: 'person',
      }
    ])
  }
}
</script>

<style>

</style>
