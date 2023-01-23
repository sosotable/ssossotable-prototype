<script setup>
import RatingStars from 'components/RatingStars.vue';
</script>
<template>
  <h5 style="text-align: center">당신의 취향을 기록해주세요</h5>
  <template v-for="item in items" v-bind:key="item">
    <div>
      <ImageHolder :image_src="item.image" :image_size="80"></ImageHolder>
      <div class="food-info">
        <div>
          <p>{{ item.name }}</p>
        </div>
        <RatingStars
          v-on:rated="rated"
          :id="item.id"
          width="24px"
          height="24px"
          :case="0"
        ></RatingStars>
      </div>
    </div>
  </template>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'InitialSignupFood',
  setup() {
    return {};
  },
  data() {
    return {
      items: {},
    };
  },
  methods: {
    rated() {
      //
    },
  },
});
</script>

<style scoped></style>
