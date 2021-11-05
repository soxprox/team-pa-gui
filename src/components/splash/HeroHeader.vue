<template>
  <q-page>
    <div class="bg-primary " style="height: 321px;">
      <div class="flex justify-between">
        <div>
          <q-img src="../../assets/logo.png" width="180px" class="absolute ml-2 mt-2"/>
        </div>
        <div>
          <Menu class="mr-6" />
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 ">
        <div class="col-1/2" :class="$q.screen.lt.md ? 'hero -mx-6':''">
          <div
            style="margin-top: 58px"
            class="text-4xl md:text-5xl lg:text-6xl text-white text-center">Make meetings productive
          </div>
          <div>
            <q-img
              src="../../assets/btn_get_started.png"
              width="281px" class="q-ml-auto q-mr-auto block cursor-pointer"
              style="margin-top: 55px;"
            />
          </div>
          <div class="text-white text-xl text-center mt-4">with a free tier account - <strong>Free Forever</strong></div>
        </div>
        <div class="col-1/2 gt-sm">
          <q-img
            src="../../assets/hero_image.png"
            width="300px"
            class="q-ml-auto q-mr-auto block"
            style="margin-top: 0px;"
          />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 md:ml-10 mt-4">
      <div class="col-1/2 ml-2 w-11/12 md:w-12/12">
        <WhatIs />
      </div>
      <div class="col-1/4 w-11/12 md:w-8/12 mt-4 md:mt-0">
        <Features />
      </div>
    </div>
  </q-page>
</template>

<script>
import WhatIs from './WhatIs.vue';
import Features from './Features.vue'
import Menu from '../user/login/SplashScreenVisitorMenu.vue'
export default {
  components: {
    WhatIs,
    Features,
    Menu
  }
}
</script>

<style>
.hero {
  background-image: url('../../assets/splash_background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0px 40px;

}
</style>

