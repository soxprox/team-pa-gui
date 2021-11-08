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
          <q-btn color="primary" dense icon="settings" label="Settings" @click="$router.push('user/settings')" />
          <q-toggle v-model="darkMode" label="Darkmode" @click="setDarkMode" />
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
import { api } from 'boot/axios'
export default {
  data() {
    return {
      darkMode: this.$q.dark.isActive,
    };
  },
  computed: {
    ...mapState('keycloak', ['keycloak']),
    ...mapState('user', ['settings'])
  },
  watch: {
    settings(newValue) {
      this.darkMode = newValue.preferences.darkMode;
    }
  },
  methods: {
    setDarkMode() {
      this.$q.dark.toggle();
      this.darkmode = this.$q.dark.isActive;
      console.log(this.$q.dark.isActive)
      api.put("/user/settings/dark-mode/23193c4c-cc8d-4cac-89ff-affcf57c434a", {
        darkMode: this.$q.dark.isActive
      });
    },
  },
}
</script>

<style>

</style>
