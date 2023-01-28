<template>
  <q-item-section>
    <q-avatar size="180px" style="margin: 20px auto" @click="fileSelect">
      <img id="preview-image" src="../../assets/portrait_placeholder.png" />
      <q-badge floating color="teal"
        ><q-icon name="photo_camera" style="color: #ccc; font-size: 30px"
      /></q-badge>
      <input
        type="file"
        ref="fileElem"
        multiple
        accept="image/*"
        style="display: none"
        @change="handleFiles($event)"
      />
    </q-avatar>
    <p style="text-align: center">{{ image_text }}</p>
    <q-input v-model="user_nickname" label="닉네임을 입력해주세요" />
    <q-btn
      color="white"
      text-color="black"
      label="계속하기"
      @click="onSubmit"
    />
  </q-item-section>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'InitialSignupInfo',
  setup() {
    const $q = useQuasar();
    function onRejected(rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      $q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`,
      });
    }
    return {
      onRejected,
      $q,
    };
  },
  data() {
    return {
      image: String,
      image_text: '아이콘 이미지를 지정해보세요',
      format: String,
      fileName: String,
      filePathGlobal: String,
      filePath: String,
      user: {},
      user_nickname: '',
    };
  },
  watch: {
    user_nickname: function () {
      this.fileName = `${this.user_nickname}.${this.format}`;
      this.filePath = `config/userImages/${this.fileName}`;
      this.filePathGlobal = `http://localhost:3000/config/userImages/${this.fileName}`;
    },
  },
  methods: {
    handleFiles: async function (event) {
      // FileReader 인스턴스 생성
      const reader = new FileReader();
      const files = event.target.files;
      const file = files[0];
      // 이미지 파일 여부 검사
      if (!file.type.startsWith('image/')) return;
      // reader가 이미지 읽도록 하기
      reader.readAsDataURL(file);
      // 이미지가 로드가 된 경우
      reader.onload = async (e) => {
        this.image_text = '멋진 이미지에요!';
        document.getElementById('preview-image').src = e.target.result;
        const idx = file.name.indexOf('.');
        this.format = file.name.substring(idx + 1).toLowerCase();
        this.image = e.target.result;
      };
    },
    fileSelect: function () {
      this.$refs.fileElem.click();
    },
    onSubmit: async function () {
      await fetch('http://127.0.0.1:3000/DAO/UPDATE', {
        method: 'POST',
        body: new URLSearchParams({
          table: 'user',
          set: `user_nickname = '${this.user_nickname}'`,
          where: `user_id = '${this.$q.cookies.get('user_id')}'`,
        }),
      });
      await fetch('http://127.0.0.1:3000/DAO/UPDATE', {
        method: 'POST',
        body: new URLSearchParams({
          table: 'user',
          set: `user_image = '${this.filePathGlobal}'`,
          where: `user_id = '${this.$q.cookies.get('user_id')}'`,
        }),
      });
      await fetch('http://127.0.0.1:3000/DAO/UPDATE', {
        method: 'POST',
        body: new URLSearchParams({
          table: 'user',
          set: `initial_signin = 1`,
          where: `user_id = '${this.$q.cookies.get('user_id')}'`,
        }),
      });
      await fetch('http://127.0.0.1:3000/fileHandler', {
        method: 'POST',
        body: new URLSearchParams({
          file: this.image,
          path: this.filePath,
        }),
      });
      this.$router.push('/initial/food');
    },
  },
});
</script>

<style scoped></style>
