<template>
  <router-view></router-view>
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
