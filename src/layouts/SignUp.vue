<template>
  <router-view></router-view>
</template>

<script>
import { defineComponent, ref } from 'vue';
import NormalSignUp from 'pages/NormalSignUp.vue';
import SocialSignUp from 'pages/SocialSignUp.vue';
export default defineComponent({
  name: 'SignUp',
  setup() {
    const normalSignUp = ref < NormalSignUp > null;
    const socialSignUp = ref < SocialSignUp > null;
    return {
      normalSignUp,
      socialSignUp,
    };
  },
});
</script>

<style scoped></style>
