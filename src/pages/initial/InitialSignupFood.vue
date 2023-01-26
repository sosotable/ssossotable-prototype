<script setup>
import RatingStars from 'components/RatingStars.vue';
</script>
<template>
  <h5 style="text-align: center">당신의 취향을 기록해주세요</h5>
  <template v-for="(item, idx) in items" v-bind:key="idx">
    <Transition>
      <div class="row" v-if="item.show">
        <q-avatar size="80px" rounded>
          <img class="box-image" :src="item.image" />
        </q-avatar>
        <div class="food-info">
          <div>
            <p>{{ item.name }}</p>
          </div>
          <RatingStars
            v-on:rated="rated"
            :id="item.id"
            width="18px"
            height="36px"
            :case="0"
          ></RatingStars>
        </div>
      </div>
    </Transition>
  </template>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'InitialSignupFood',
  setup() {
    let ratingCount = 0
    return {
      ratingCount
    };
  },
  data() {
    return {
      show: true,
      items: {
        /** sample {
         *  1 : {
         *    id: 1,
         *    name: '1',
         *    image: 'img',
         *    show: true
         *  }
         * }
         * */
      }
    };
  },
  methods: {
    rated(rating, id) {
      this.ratingCount == 20
        ? this.$router.push('/main/feed')
        // TODO: backend rating insert
        : setTimeout(()=>{ this.info[id].show = false; this.ratingCount += 1;},200)
    },
  },
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
