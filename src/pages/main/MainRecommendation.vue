<template>
  <div class="">
    <q-carousel
      arrows
      animated
      transition-prev="jump-right"
      transition-next="jump-left"
      swipeable
      padding
      control-color="black"
      v-model="slide"
      :height="windowHeight"
    >
      <q-carousel-slide name="first"       >
<!--                        img-src="https://cdn.quasar.dev/img/mountains.jpg"-->

        <div class="absolute-top custom-caption">
          <div class="text-h5">익숙한 맛이 좋은 법이죠</div>
          <div class="text-subtitle1">평균적으로 높은 점수를 준 음식들이에요</div>
        </div>
        <q-scroll-area class="fit">
          <template v-for="item in recommendation_1" v-bind:key="item">
            <div class="list-group-item">
              <div class="box">
                <img class="card-img" :src="item.image" alt="..."/>
              </div>
              <span>{{item.name}}</span>
            </div>
          </template>
        </q-scroll-area>
      </q-carousel-slide>
      <q-carousel-slide name="second">
        <div class="absolute-top custom-caption">
          <div class="text-h5">오늘은 테스트 님과</div>
          <div class="text-subtitle1">이런 음식을 먹어보는건 어떨까요?</div>
        </div>
        <q-scroll-area class="fit">
          <template v-for="item in recommendation_2" v-bind:key="item">
            <div class="list-group-item">
              <div class="box">
                <img class="card-img" :src="item.image" alt="..."/>
              </div>
              <span>{{item.name}}</span>
            </div>
          </template>
        </q-scroll-area>
      </q-carousel-slide>
      <q-carousel-slide name="third">
        <div class="absolute-top custom-caption">
          <div class="text-h5">높은 선호도를 기록한</div>
          <div class="text-subtitle1">테스트 특성의 음식들이에요</div>
        </div>
        <q-scroll-area class="fit">
          <template v-for="item in recommendation_3" v-bind:key="item">
            <div class="list-group-item">
              <div class="box">
                <img class="card-img" :src="item.image" alt="..."/>
              </div>
              <span>{{item.name}}</span>
            </div>
          </template>
        </q-scroll-area>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'MainRecommendation',
  setup() {
    return {
      slide: ref('first')
     };
  },
  data() {
    return {
      windowHeight: '',
      recommendation_1: [],
      recommendation_2: [],
      recommendation_3: [],
    }
  },
  created() {
    this.windowHeight = window.innerHeight + 'px'
  }
});
</script>

<style scoped></style>
<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
