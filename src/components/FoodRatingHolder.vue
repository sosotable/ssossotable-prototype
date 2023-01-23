<script setup>
import RatingStars from 'components/RatingStars.vue';
</script>
<template></template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FoodRatingHolder',
  props: {
    info: Object,
  },
  methods: {
    rated(rating) {},
  },
});
</script>

<style scoped></style>
