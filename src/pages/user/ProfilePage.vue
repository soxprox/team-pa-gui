<template>
  <q-page padding>
    <div class="flex justify-around">
        <q-card class="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          <q-card-section>
            <div class="text-h6">User Profile</div>
          </q-card-section>
          <q-card-section>
            <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                dense
                v-model="user.email"
                type="text"
                label="Email Address"
                :rules="[
                  val => val !== null && val !== '' || 'Please type your age',
                  val => val.includes('@') || 'Pleaes enter a valid email'
                ]"
                />
                <q-input dense v-model="user.firstName" type="text" label="First Name" />
                <q-input dense v-model="user.lastname" type="text" label="Last Name" />
              <div>
                <q-btn label="Submit" type="submit" color="primary" />
                <q-btn
                  label="Reset"
                  type="reset"
                  color="primary"
                  flat
                  class="q-ml-sm"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        email: "",
      },
    };
  },
  methods: {
    ...mapActions("site", ["setBreadCrumbs"]),
  },
  mounted: function () {
    this.setBreadCrumbs([
      {
        label: "User",
        icon: "person",
      },
      {
        label: "Profile",
        icon: "person",
      },
    ]);
  },
};
</script>

<style></style>
