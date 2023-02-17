<template>
  <q-layout style="text-align: center">
    <h5>소셜 계정으로 간편하게 로그인하세요</h5>
    <div class="column">
      <div id="naver_id_login"></div>
      <div @click='auth_naver'>
        <q-avatar>
          <img src="../../assets/naver.png"/>
        </q-avatar>
        <q-btn color="white" text-color="black" label="네이버 로그인" />
      </div>

      <div>
        <q-avatar>
          <img src="../../assets/kakao.png" />
        </q-avatar>
        <q-btn color="white" text-color="black" label="카카오 로그인" />
      </div>
      <div>
        <q-avatar>
          <img src="../../assets/instagram.svg" />
        </q-avatar>
        <q-btn color="white" text-color="black" label="인스타그램 로그인" />
      </div>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'SocialSignUp',
  setup() {
    return {};
  },
  created() {
    //
  },
  async mounted() {
    //
  },
  methods: {
  }
});
</script>

<style scoped>
button {
  width: 70%;
}
</style>
