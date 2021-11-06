<template>
  <q-page padding>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <MeetingList/>
      <MeetingList/>
      <MeetingList/>
      <MeetingList/>
      <MeetingList/>
      <MeetingList/>
      <MeetingList/>
      <MeetingList/>
      <MeetingList/>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import MeetingList from '../components/meetings/MeetingList.vue'
export default {
  components: {
    MeetingList
  },
  methods: {
    ...mapActions('site',['setBreadCrumbs'])
  },
  mounted: function () {
    this.setBreadCrumbs([
      {
        label: 'Dashboard',
        icon: 'dashboard',
      }
    ])
  }
}
</script>

<style>

</style>
