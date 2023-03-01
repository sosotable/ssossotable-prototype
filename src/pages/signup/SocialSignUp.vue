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
        <q-btn @click='onSubmitGoogle' color="white" text-color="black" label="구글 로그인" />
      </div>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANAghe_xJZhZL8NhReNjrKqgJWuWnlqn8",
  authDomain: "ssossotable-474d0.firebaseapp.com",
  projectId: "ssossotable-474d0",
  storageBucket: "ssossotable-474d0.appspot.com",
  messagingSenderId: "451266093702",
  appId: "1:451266093702:web:77484008b134e54ece6707"
};


export default defineComponent({
  name: 'SocialSignUp',
  setup() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    return {
      app,
      auth,
      provider
    };
  },
  created() {
    //
  },
  async mounted() {
    //
  },
  methods: {
    // 구글 회원가입
    onSubmitGoogle: function() {
      signInWithPopup(this.auth, this.provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }
  }
});
</script>

<style scoped>
button {
  width: 70%;
}
</style>
