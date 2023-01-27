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
            <h3 style="margin: 5%">소소식탁</h3>
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
        <div class="q-pa-md" style="max-width: 400px; margin: auto">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="id"
              label="ID"
              hint="아이디를 입력해주세요"
              aria-autocomplete="none"
              autocomplete="off"
              lazy-rules
              :rules="[
                (val) => (val && val.length >= 0) || '아이디를 입력해주세요',
              ]"
            ></q-input>
            <q-input
              filled
              type="password"
              v-model="password"
              label="Password"
              hint="비밀번호를 입력해주세요"
              maxlength="20"
              aria-autocomplete="none"
              autocomplete="off"
              lazy-rules
              :rules="[
                (val) => (val && val.length >= 0) || '비밀번호를 입력해주세요',
                (val) =>
                  (val && val.length <= 20) || '패스워드는 20자 이내입니다',
              ]"
            ></q-input>
            <q-toggle
              v-model="value"
              label="자동로그인"
              keep-color
              checked-icon="check"
              unchecked-icon="clear"
            />
            <div>
              <q-btn
                unelevated
                rounded
                label="로그인"
                type="submit"
                color="primary"
              ></q-btn>
            </div>
          </q-form>
        </div>
        <div class="row justify-center" style="margin: 10% 0 auto 0">
          <q-btn
            style="width: 70%"
            class="btn-fixed-width"
            @click="socialSignup"
            unelevated
            rounded
            color="primary"
            label="소셜 로그인"
          />
        </div>
        <div class="row justify-center" style="margin: 10% 0 auto 0">
          <q-btn
            style="width: 70%"
            class="btn-fixed-width"
            @click="normalSignup"
            unelevated
            rounded
            color="primary"
            label="회원가입"
          />
        </div>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import axios from 'axios';
import { useQuasar } from 'quasar'
const linksList = [
  {
    title: 'Github',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Email',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Instagram',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];

export default defineComponent({

  name: 'SignIn',

  components: {},

  setup() {
    const $q = useQuasar()
    return {
      essentialLinks: linksList,
      $q
    };
  },
  data() {
    return {
      id: '',
      password: '',
      value: false
    };
  },
  methods: {
    onSubmit: async function () {
      const signin_result= await (await fetch('http://127.0.0.1:3000/DAO/SELECT', {
        method: "POST",
        body: new URLSearchParams({
          columns: '*',
          table: 'user',
          where: `user_id = '${this.id}' and user_password = '${this.password}'`
        })
      })).json()
      const user_key = signin_result[0].key
      const user_id = signin_result[0].user_id
      const user_image = signin_result[0].user_nickname
      const user_nickname = signin_result[0].user_image
      const options = {
        path : '/',
        expires: '1h'
      }
      switch (signin_result.length) {
        case 0:
          alert('회원 정보를 확인해주세요.')
          break;
        case 1:
          this.$q.cookies.set('user_key', user_key, options)
          this.$q.cookies.set('user_id', user_id, options)
          this.$q.cookies.set('auto_sign_in', String(this.value), options)
          switch (parseInt(signin_result[0].initial_signin)) {
            case 0:
              this.$q.cookies.set('user_nickname', user_image, options)
              this.$q.cookies.set('user_image', user_nickname, options)
              this.$router.push('/main/feed')
              break
            case 1:
              this.$router.push('/initial/food')
              break
            case 2:
              this.$router.push('/initial/info')
              break
          }
          break;
      }
    },
    onReset: function () {
      console.log('reset');
    },
    socialSignup: function () {
      this.$router.push('/signup/social');
    },
    normalSignup: function () {
      this.$router.push('/signup/normal');
    },
  }
});
</script>
