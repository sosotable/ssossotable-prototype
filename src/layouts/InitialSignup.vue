<template>
  <div class="q-pa-md">
    <q-layout
      view="lHh lpr lFf"
      container
      style="height: 400px"
      class="shadow-2 rounded-borders"
    >
      <q-header bordered class="bg-white text-primary">
        <q-toolbar>
          <q-toolbar-title class="text-center">
            소소식탁에 오신 것을 환영해요!
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <footer class="fixed-bottom" style="text-align: center">
        <span>ssosso.table 2022-2023</span>
        <q-avatar style="margin: 10px"
          ><img src="../assets/logo.png"
        /></q-avatar>
      </footer>
      <q-page-container>
        <q-page class="q-pa-md">
          <router-view></router-view>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import InitialSignupInfo from 'pages/initial/InitialSignupInfo.vue';
import InitialSignupFood from 'pages/initial/InitialSignupFood.vue';

export default defineComponent({
  name: 'InitialSignup',
  setup() {
    const initialSignupInfo = ref < InitialSignupInfo > null;
    const initialSignupFood = ref < InitialSignupFood > null;
    return {
      initialSignupInfo,
      initialSignupFood,
    };
  },
});
</script>

<style scoped></style>
