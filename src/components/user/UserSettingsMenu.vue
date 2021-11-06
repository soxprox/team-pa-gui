<template>
  <div>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      breadCrumbs: [
        {
          label: 'User',
          icon: 'person'
        },
        {
          label: 'Settings',
          icon: 'settings'
        }
      ]
    }
  },
  methods: {
    ...mapActions('site',['setBreadCrumbs'])
  },
  mounted() {
    this.setBreadCrumbs(this.breadCrumbs);
  }
}
</script>

<style>

</style>
