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
      <q-carousel-slide name="first" img-src="https://blog.kakaocdn.net/dn/SW0ad/btq0kDjAOYk/TPh0vkhkmxix0x9Wj2IMeK/img.png">

        <div class="absolute-top custom-caption">
          <div class="text-h5">익숙한 맛이 좋은 법이죠</div>
          <div class="text-subtitle1">높은 점수를 줬던 마라탕은 어때요?</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src='http://www.kns.tv/news/photo/201804/419849_303036_3832.jpg'>
        <div class="absolute-top custom-caption">
          <div class="text-h5">오늘은 농담곰 님과</div>
          <div class="text-subtitle1">양고기를 먹어보는건 어떨까요?</div>
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
      <q-carousel-slide name="third" img-src='https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjlfMjU3/MDAxNTkzNDI4NTU0MjU5.SH9UZWgwo4zEF9B9bCVK0QHYR49Jy9HZcXiP9UTy7Csg.NBczbLAaTMsXx1_FQOO-fKFsyHQCvjPacP1hPm2RXZAg.JPEG.princessrin/1.jpg?type=w800'>
        <div class="absolute-top custom-caption">
          <div class="text-h5">높은 선호도를 기록한</div>
          <div class="text-subtitle1">매운맛 음식인 야채곱창은 어때요?</div>
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
