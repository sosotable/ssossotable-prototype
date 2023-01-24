<template>
  <div class="q-pa-md" view="hHh lpR fFf">
    <q-layout
      view="lHh lpr lFf"
      container
      style="height: 400px"
      class="shadow-2 rounded-borders"
    >
      <q-header bordered class="bg-white text-primary">
        <q-toolbar>
          <q-toolbar-title class="text-center">
            <h4 style="margin: 5%">회원가입</h4>
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
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import NormalSignUp from 'pages/signup/NormalSignUp.vue';
import SocialSignUp from 'pages/signup/SocialSignUp.vue';
export default defineComponent({
  name: 'SignUp',
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
