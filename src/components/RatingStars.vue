<template>
  <template v-for="rating_star in rating_stars" v-bind:key="rating_star">
    <img
      :class="this.class"
      :style="style"
      @click="set(rating_star.id)"
      :src="rating_star.src"
    />
  </template>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RatingStars',
  setup() {
    return {};
  },
  props: {
    width: String,
    height: String,
    id: Number,
  },
  watch: {
    rating() {
      this.set(this.rating);
    },
  },
  data() {
    return {
      rating_stars_before: {
        left: '/src/assets/rating_before_left.png',
        right: '/src/assets/rating_before_right.png',
      },
      rating_stars_after: {
        left: '/src/assets/rating_after_left.png',
        right: '/src/assets/rating_after_right.png',
      },
      rating_stars: [
        { id: 1, src: '/src/assets/rating_before_left.png' },
        { id: 2, src: '/src/assets/rating_before_right.png' },
        { id: 3, src: '/src/assets/rating_before_left.png' },
        { id: 4, src: '/src/assets/rating_before_right.png' },
        { id: 5, src: '/src/assets/rating_before_left.png' },
        { id: 6, src: '/src/assets/rating_before_right.png' },
        { id: 7, src: '/src/assets/rating_before_left.png' },
        { id: 8, src: '/src/assets/rating_before_right.png' },
        { id: 9, src: '/src/assets/rating_before_left.png' },
        { id: 10, src: '/src/assets/rating_before_right.png' },
      ],
      style: {
        width: this.width,
        height: this.height,
      },
      class: 'rating-stars',
    };
  },
  methods: {
    async set(rating) {
      this.$emit('rated', this.rating, this.id);
      this.clear();
      for (let i = 0; i < rating; i++) {
        if (i % 2 === 0) {
          this.rating_stars[i].src = this.rating_stars_after.left;
        } else {
          this.rating_stars[i].src = this.rating_stars_after.right;
        }
      }
    },
    clear() {
      for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
          this.rating_stars[i].src = this.rating_stars_before.left;
        } else {
          this.rating_stars[i].src = this.rating_stars_before.right;
        }
      }
    },
  },
  computed: {},
});
</script>

<style scoped></style>
