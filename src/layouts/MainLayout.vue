<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <q-toolbar-title>
        <h3 style="text-align: center;">
          소소식탁
        </h3>
      </q-toolbar-title>
      <div class="q-pa-md" style="max-width: 400px; margin: auto">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="id"
            label="ID"
            hint="아이디를 입력해주세요"
            aria-autocomplete="none"
            autocomplete="off"
            lazy-rules
            :rules="[ val => val && val.length >= 0 || '아이디를 입력해주세요']"
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
          val => val && val.length >= 0 || '비밀번호를 입력해주세요',
          val => val && val.length <= 20 || '패스워드는 20자 이내입니다'
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
            <q-btn unelevated rounded label="로그인" type="submit" color="primary"></q-btn>
          </div>
        </q-form>
      </div>
      <div class="row justify-center" style="margin: 10% 0 auto 0;">
        <q-btn style="width: 70%" class="btn-fixed-width" unelevated rounded color="primary" label="소셜 로그인" />
      </div>

    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar style="text-align: center;">
        <q-toolbar-title>
          <span>ssosso.table 2022-2023</span><q-avatar style="margin: 10px;"><img src="../assets/logo.png"></q-avatar>
        </q-toolbar-title>
      </q-toolbar>
      <q-list class="row justify-center">
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-footer>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Github',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Email',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Instagram',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  data() {
    return {
      id: '',
      password: '',
      value: false
    }
  },
  methods: {
    onSubmit: function() {
      console.log('submit')
    },
    onReset: function() {
      console.log('reset')
    }
  }
});
</script>