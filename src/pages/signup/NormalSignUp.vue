<template>
  <form class="form-signin" style="text-align: center">
    <h3>회원가입</h3>
    <div class="input-group mb-3">
      <div class="column justify-start">
        <q-input
          type="email"
          pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
          required
          outlined
          v-model="text"
          label="메일 주소를 입력해주세요"
          :dense="dense"
        />
        <q-btn color="white" text-color="black" label="인증 번호 전송" />
      </div>
      <div class="column justify-start">
        <q-input
          outlined
          v-model="text"
          label="인증 번호를 입력해주세요"
          :dense="dense"
        />
        <q-btn color="white" text-color="black" label="인증 번호 확인" />
      </div>

      <q-input
        outlined
        v-model="text"
        label="6자에서 20자 사이의 비밀번호를 입력해주세요"
        counter
        maxlength="20"
        minlength="6"
        :dense="dense"
      />
      <q-input
        outlined
        v-model="text"
        label="비밀번호를 확인해주세요"
        :dense="dense"
      />
      <q-btn color="white" text-color="black" label="가입하기" />
    </div>
  </form>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { io } from 'socket.io-client';
export default defineComponent({
  name: 'NormalSignUp',
  setup() {
    const socket = io();
    return {
      socket,
    };
  },
  data() {
    return {
      logo: './src/assets/logo.png',
      auth_code: Number,
      email: '',
      confirm_email: '',
      send_code_input: {
        value: '메일 주소를 입력해주세요',
      },
      send_code_status: {
        value: '인증코드 전송',
        flag: false,
      },
      check_code_input: {
        value: '인증 코드를 입력해주세요',
      },
      check_code_status: {
        value: '인증코드 확인',
        code: null,
        flag: false,
      },
      password: {
        init: '',
        confirm: '',
        verify: '6자에서 12자 사이의 비밀번호를 입력해주세요.',
        flag: false,
      },
      confirm_password: '',
      inputStyle: {
        margin: '0',
        display: 'block',
        width: '100%',
        padding: '20px',
      },
    };
  },
  methods: {
    async send_code() {
      // MARK: 이미 인증 코드를 보낸 경우
      if (this.send_code_status.flag) {
        return;
      }
      // MARK: 기존 가입 여부 확인
      const user_exist = (
        await fetch(this.$apiPaths.DAOHandler, {
          method: 'POST',
          body: new URLSearchParams({
            0: 'select',
            1: '*',
            2: 'user',
            3: `userid = '${this.confirm_email}'`,
          }),
        })
      ).json;
      if (user_exist.length < 0) {
        this.email = '';
        alert('이미 가입된 메일입니다');
        return;
      }
      // MARK: 이메일 유효성 확인
      if (
        this.email.match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        ) !== null
      ) {
        this.send_code_status.value = '전송 완료!';
        this.send_code_status.flag = true;
        this.confirm_email = this.email;
        this.auth_code = this.rand(999999, 100000);
        await fetch(this.$apiPaths.SignupAuth, {
          method: 'POST',
          body: new URLSearchParams({
            sendData: JSON.stringify({
              senderAddress: 'no_reply@ssossotable.com',
              title: '소소식탁 가입 인증 번호입니다',
              body: `${this.auth_code}`,
              recipients: {
                address: `${this.email}`,
                type: 'R',
              },
            }),
          }),
        });
      } else {
        this.email = '';
        this.send_code_input.value = '올바른 메일 형식을 입력해주세요';
        setTimeout(
          () => (this.send_code_input.value = '메일 주소를 입력해주세요'),
          5000
        );
      }
    },
    confirm_code() {
      if (parseInt(this.auth_code) === parseInt(this.check_code_status.code)) {
        this.check_code_status.value = '인증 완료!';
        this.check_code_status.flag = true;
      } else {
        alert('인증 번호를 확인해주세요');
      }
    },
    verify_password: function () {
      if (
        this.password.confirm === '' ||
        this.password.init === '' ||
        this.password.init.length < 6 ||
        this.password.confirm.length < 6
      ) {
        this.password.verify = '6자에서 12자 사이의 비밀번호를 입력해주세요.';
      } else {
        if (this.password.init === this.password.confirm) {
          this.password.verify = '비밀번호가 일치합니다.';
          this.password.flag = true;
          this.confirm_password = this.password.init;
        } else {
          this.password.verify = '동일한 비밀번호를 눌러주세요.';
          this.password.flag = false;
        }
      }
    },
    signup: async function () {
      if (this.check_code_status.flag && this.password.flag) {
        await fetch(this.$apiPaths.DAOHandler, {
          method: 'POST',
          body: new URLSearchParams({
            0: 'insert',
            1: 'user(userid, password)',
            2: `'${this.confirm_email}', '${this.confirm_password}'`,
          }),
        });
        this.$setCookie('', this.confirm_email, '', '');
        this.$router.push({
          name: 'initialsignup',
          params: { user_name: this.confirm_email },
        });
      }
    },
    rand: function (max, min) {
      return Math.floor(Math.random() * (max - min) + min);
    },
  },
  computed: {},
});
</script>

<style scoped>
.q-field {
  margin: 20px;
}
button {
  margin: 0 20px;
}
</style>
