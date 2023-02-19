<template>
  <q-rating
    v-model="star"
    max="5"
    :size="size"
    color='amber-11'
    icon="star_border"
    icon-selected="star"
    icon-half="star_half"
    no-dimming
  />
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'RatingStars',
  setup() {
    const star = ref(0)
    return {
      star
    };
  },
  props: {
    size: String,
    id: Number,
    rating: {
      type: Number,
      default: 0
    },
    static: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    // MAKR: 클릭 이벤트시 평가 점수를 이벤트 발생시킴 => 상위 템플릿에서 평가 동작 실시
    star() {
      this.$emit('rated', this.star, this.id)
    },
  },
  mounted() {
    if(this.rating !== 0) {
      this.star = this.rating
    }
  },
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {},
});
</script>

<style scoped></style>
