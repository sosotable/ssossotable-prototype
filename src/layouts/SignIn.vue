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
              v-model="autoSignIn"
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
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'SignIn',
  components: {},
  setup() {
    const $q = useQuasar();
    const cookieOptions = {
      path: '/',
      expires: '24h',
    };
    $q.loading.show({
      delay: 400, // ms
    });

    $q.loading.hide();
    return {
      $q,
      cookieOptions,
    };
  },
  data() {
    return {
      id: '',
      password: '',
      autoSignIn: false,
    };
  },
  async mounted() {
    console.log(this.$q.cookies.getAll())
    if (await this.getSessionKey()) {
      this.$q.loading.show({
        message:
          '다시 <b>소소식탁</b> 을 찾아주셔서 감사해요.<br/><span class="text-amber text-italic">언제나 행복하세요!</span>',
        html: true,
      });
      setTimeout(() => {
        this.$q.loading.hide();
        this.$router.push('/main/feed');
      }, 1500);
    } else {
      this.$q.loading.show();
      setTimeout(() => {
        this.$q.loading.hide();
        this.$router.push('/');
      }, 500);
    }
  },
  methods: {
    /** MARK: 회원가입
     * */
    onSubmit: async function () {
      const signin_result = await (
        await fetch('http://127.0.0.1:3000/DAO/SELECT', {
          method: 'POST',
          body: new URLSearchParams({
            columns: '*',
            table: 'user',
            where: `user_id = '${this.id}' and user_password = '${this.password}'`,
          }),
        })
      ).json();
      const user_key = signin_result[0].key;
      const user_id = signin_result[0].user_id;
      const user_image = signin_result[0].user_image;
      const user_nickname = signin_result[0].user_nickname;
      switch (signin_result.length) {
        case 0:
          alert('회원 정보를 확인해주세요.');
          break;
        case 1:
          // MARK: 자동 로그인이 지정되어 있을때만 자동로그인을 등록함
          this.autoSignIn === true ? await this.setSessionKey(user_key) : false;
          this.$q.cookies.set('user_key', user_key, this.cookieOptions);
          this.$q.cookies.set('user_id', user_id, this.cookieOptions);
          switch (parseInt(signin_result[0].initial_signin)) {
            case 0:
              this.$q.cookies.set(
                'user_nickname',
                user_nickname,
                this.cookieOptions
              );
              this.$q.cookies.set('user_image', user_image, this.cookieOptions);
              this.$router.push('/main/feed');
              break;
            case 1:
              this.$router.push('/initial/food');
              break;
            case 2:
              this.$router.push('/initial/info');
              break;
          }
          break;
      }
    },
    /** MARK: 자동로그인을 위한 세션키 할당
     * */
    setSessionKey: async function (user_key: string) {
      const key = JSON.stringify(crypto.randomUUID())
        .toUpperCase()
        .replaceAll('-', '');
      await fetch('http://127.0.0.1:3000/DAO/INSERT', {
        method: 'POST',
        body: new URLSearchParams({
          table: 'sessions',
          columns: '`key`, user_key',
          values: `'${key}', ${user_key}`,
        }),
      });
      this.$q.cookies.set('session_key', key, this.cookieOptions);
    },
    /** MARK: index 페이지 입장 시 자동로그인 체크
     * */
    getSessionKey: async function () {
      // MARK: 세션키를 가지고 있다면
      if (this.$q.cookies.has('session_key')) {
        // MARK: 만료 일자 검색
        const expire = await (
          await fetch('http://127.0.0.1:3000/DAO/SELECT', {
            method: 'POST',
            body: new URLSearchParams({
              columns: '*',
              table: 'sessions',
              where: `\`key\` = '${this.$q.cookies.get('session_key')}'`,
            }),
          })
        ).json();
        // MARK: 세션 키 만료일자가 현재 시각보다 이전일경우 세션키 만료
        if (new Date(expire[0].expire) < new Date(Date.now())) {
          await fetch('http://127.0.0.1:3000/DAO/DETETE', {
            method: 'POST',
            body: new URLSearchParams({
              from: 'sessions',
              where: `\`key\` = '${this.$q.cookies.get('session_key')}'`,
            }),
          });
          this.$q.cookies.remove('session_key');
          return false
        }
        // MARK: 세션 키 만료일자가 현재 시각보다 이후일경우 자동로그인 등록
        else {
          const auto_signin_result = await (
            await fetch('http://127.0.0.1:3000/DAO/SELECT', {
              method: 'POST',
              body: new URLSearchParams({
                columns: '*',
                table: 'user',
                where: `\`key\` in ( SELECT user_key FROM sessions WHERE \`key\` = '${this.$q.cookies.get(
                  'session_key'
                )}')`,
              }),
            })
          ).json();
          this.$q.cookies.set(
            'user_key',
            this.$q.cookies.get('user_key'),
            this.cookieOptions
          );
          this.$q.cookies.set(
            'user_id',
            this.$q.cookies.get('user_id'),
            this.cookieOptions
          );
          this.$q.cookies.set(
            'user_nickname',
            this.$q.cookies.get('user_nickname'),
            this.cookieOptions
          );
          this.$q.cookies.set(
            'user_image',
            this.$q.cookies.get('user_image'),
            this.cookieOptions
          );
          this.$q.cookies.set(
            'session_key',
            this.$q.cookies.get('session_key'),
            this.cookieOptions
          );
          return true;
        }
      } else {
        return false;
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
    rand: function (max: number, min: number) {
      return Math.floor(Math.random() * (max - min) + min);
    },
  },
});
</script>
