<template>
  <div>
    <q-btn-dropdown
      color="secondary"
      label="Account Settings"
      stretch
      flat
      dense
      v-if="keycloak.authenticated"
    >
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md">Settings</div>
          <q-btn color="primary" dense icon="person" label="Profile" @click="$router.push('/user/profile')" />

        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">{{keycloak.tokenParsed.email}}</div>

          <q-btn
            color="primary"
            label="Logout"
            push
            size="sm"
            v-close-popup
            @click="keycloak.logout()"
          />
        </div>
      </div>
    </q-btn-dropdown>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('keycloak', ['keycloak'])
  }
}
</script>

<style>

</style>
