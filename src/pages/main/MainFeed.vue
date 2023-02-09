<template>

  <div class="">
    <q-carousel
      v-model="slide"
      vertical
      transition-prev="slide-down"
      transition-next="slide-up"
      swipeable
      animated
      control-color="black"
      arrows
      :height="windowHeight"
      class="text-black rounded-borders carousel"

    >
      <q-carousel-slide :style='mapStyle' name="map" class="column no-wrap flex-center" >
        <div id='map' :style='mapStyle'></div>
      </q-carousel-slide>
      <q-carousel-slide name="feed" class="column no-wrap flex-center">
        <div id='feed'>feed page</div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';
export default defineComponent({
  name: 'MainFeed',
  setup () {
    return {

    }
  },
  data() {
    return {
      mapStyle: {
        width: '100%',
        height: '100%',
      },
      slide: ref('map'),
      map: null,
      infowindow: null,
      ps: null,
      windowHeight: ''
    };
  },
  watch: {
    slide: function() {
      this.initMap();
    }
  },
  methods: {
    initMap() {
      setTimeout(()=>{
        const container = document.getElementById('map')
        const options = {
          center: new kakao.maps.LatLng(37.566826, 126.9786567),
          level: 5,
        };
        this.map = new kakao.maps.Map(container, options);
        this.infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
        this.ps = new kakao.maps.services.Places();
      }, 100)
    },
  },
  computed: {},
  created() {
    this.windowHeight = window.innerHeight + 'px'
  },
  async mounted() {
    if (!window.kakao || !window.kakao.maps) {
      // script 태그 객체 생성
      const script = document.createElement('script');
      // src 속성을 추가하며 .env.local에 등록한 service 키 활용
      // 동적 로딩을 위해서 autoload=false 추가
      script.src =
        '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=' +
        `${process.env.KAKAOMAP_KEY}` +
        '&libraries=services,clusterer,drawing';
      /* global kakao */
      document.head.appendChild(script);
      script.addEventListener('load', () => {
        kakao.maps.load(this.initMap);
      });
    } else {
      //console.log("이미 로딩됨: ", window.kakao);
      this.initMap();
    }
  },
});
</script>

<style scoped></style>
