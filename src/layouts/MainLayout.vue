<template>
  <q-layout view="lHh Lpr lFf" class="">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          <q-img src="../assets/logo.png" width="180px"/>
        </q-toolbar-title>
        <AuthenticatedMenu />
      </q-toolbar>
      <q-toolbar inset>
        <Breadcrumbs :crumbs="[{label: 'User', icon: 'person' }, {label: 'Settings', icon: 'settings'}]" />
      </q-toolbar>
    </q-header>
    <q-page-container class="w-screen">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'
import AuthenticatedMenu from '../components/user/AuthenticatedMenu.vue'
import Breadcrumbs from '../components/site/Breadcrumbs.vue'
export default defineComponent({
  name: 'MainLayout',
  components: {
    AuthenticatedMenu,
    Breadcrumbs
  },
  setup () {
    const leftDrawerOpen = ref(false)
    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
