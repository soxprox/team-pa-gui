<template>
  <div>
    <div class="flex" v-if="!keycloak.authenticated">
      <div
        class="mr-4 text-white font-semibold text-lg cursor-pointer"
        @click="login"
      >Login</div>

      <div
        class="text-white font-semibold text-lg cursor-pointer"
        @click="register"
      >Register</div>
    </div>
    <div v-else>
      <div class="text-white font-semibold text-lg cursor-pointer" @click="$router.push('/app/dashboard')">Go to Dashboard</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("keycloak", ["keycloak"]),
  },
  methods: {
    login() {
      this.keycloak.login();
    },
    register() {
      this.keycloak.register();
    },
  },
};
</script>

<style></style>
