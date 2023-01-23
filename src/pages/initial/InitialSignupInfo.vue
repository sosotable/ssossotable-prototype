<template>
  <q-item-section>
    <q-avatar size="180px">
      <img src="../../assets/portrait_placeholder.png" />
      <q-badge floating color="teal"
        ><q-icon name="photo_camera" style="color: #ccc; font-size: 30px"
      /></q-badge>
    </q-avatar>
    <p>아이콘 이미지를 지정해보세요</p>

    <q-input v-model="text" label="닉네임을 입력해주세요" />

    <q-btn color="white" text-color="black" label="계속하기" />
  </q-item-section>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'InitialSignupInfo',
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
