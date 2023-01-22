<template>
  <q-layout style="text-align: center;">
    <h5>소셜 계정으로 간편하게 가입하세요</h5>
    <div class="column">
      <div>
          <q-avatar>
            <img src="../assets/naver.png" />
          </q-avatar>
          <q-btn color="white" text-color="black" label="네이버 회원가입"/>
      </div>

      <div>
        <q-avatar>
          <img src="../assets/kakao.png" />
        </q-avatar>
        <q-btn color="white" text-color="black" label="카카오 회원가입"/>
      </div>
      <div>
        <q-avatar>
          <img src="../assets/instagram.svg" />
        </q-avatar>
        <q-btn color="white" text-color="black" label="인스타그램 회원가입"/>
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
});
</script>

<style scoped>
  button {
    width: 70%;
  }
</style>
