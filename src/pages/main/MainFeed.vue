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
      <q-carousel-slide style='width: 100%; height: 100%;' name="map" class="column no-wrap flex-center" >
        <div style='width: 100%; height: 100%'>
          <div>
            <q-input
              v-model="searchText"
              debounce="500"
              filled
              placeholder="장소를 검색해보세요"
            >
              <template v-slot:append>
                <q-icon name="search" @click='search'/>
              </template>
            </q-input>
          </div>
          <div id='map' class='column' :style='mapStyle'></div>
          <q-scroll-area :style='placeListStyle'>
            <q-list bordered separator>
              <q-item id='place-list' v-for='(place, idx) in places' v-bind:key='idx'>
                <q-item-section>
                  <q-item-label>{{place.place_name}}</q-item-label>
                  <q-item-label caption>{{ place.road_address_name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>

          <div id='place-info' :style='placeInfoStyle' >

          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="feed" class="column no-wrap flex-center">
        <q-scroll-area style="height: 100%; width: 100%; max-width: 100%;">
          <q-card class="my-card">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://i.pinimg.com/736x/f6/3f/99/f63f99d1b86351982b5d8693b36f7e7c.jpg">
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>농담곰</q-item-label>
                <q-item-label caption>말랑말랑</q-item-label>
              </q-item-section>
            </q-item>
            <q-img src="http://the-edit.co.kr/wp-content/uploads/2021/04/1400_retouched_-2-3-1.jpg">
              <div class="absolute-bottom text-h6">
                북극곰 라멘
              </div>
            </q-img>
            <q-card-section>
              농담시 농담로 농담길 22
            </q-card-section>
            <q-card-section>
              <rating-stars
                :rating='8'
                :static='true'
                width="18px"
                height="36px">
              </rating-stars>
            </q-card-section>
          </q-card>
          <q-card class="my-card">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://i.pinimg.com/564x/81/e5/2d/81e52dab0c85d7d3fb7dcf9728c3d9b9.jpg">
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>두더지고로케</q-item-label>
                <q-item-label caption>바삭바삭</q-item-label>
              </q-item-section>
            </q-item>
            <q-img src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/d1ner2qui_nwg6t_.png">
              <div class="absolute-bottom text-h6">
                그릭그릭거트
              </div>
            </q-img>
            <q-card-section>
              농담시 농담로 농담길 33
            </q-card-section>
            <q-card-section>
              <rating-stars
                :rating='9'
                :static='true'
                width="18px"
                height="36px">
              </rating-stars>
            </q-card-section>
          </q-card>
          <q-card class="my-card">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://i.pinimg.com/564x/e6/80/fb/e680fb2e26c29b270fee990bd1ec2b26.jpg">
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>하치와레</q-item-label>
                <q-item-label caption>복슬복슬</q-item-label>
              </q-item-section>
            </q-item>
            <q-img src="http://d20aeo683mqd6t.cloudfront.net/ko/articles/title_images/000/039/436/medium/IMG_5542_s.jpg?2019">
              <div class="absolute-bottom text-h6">
                타코타코야키
              </div>
            </q-img>
            <q-card-section>
              농담시 농담로 농담길 44
            </q-card-section>
            <q-card-section>
              <rating-stars
                :rating='10'
                :static='true'
                width="18px"
                height="36px">
              </rating-stars>
            </q-card-section>
          </q-card>
        </q-scroll-area>

      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import RatingStars from 'components/RatingStars.vue';
export default defineComponent({
  name: 'MainFeed',
  components: {
    RatingStars
  },
  setup () {
    return {

    }
  },
  data() {
    return {
      mapStyle: {
        width: '100%',
        height: '80%',
      },
      placeListStyle: {
        width: '100%',
        height: '40%',
        maxHeight: '40%',
        display: 'none'
      },
      placeInfoStyle: {
        width: '100%',
        height: '80%',
        display: 'none'
      },
      slide: ref('map'),
      map: null,
      infowindow: null,
      ps: null,
      windowHeight: '',
      searchText: '',
      markers: [],
      places: []
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
        this.infowindow = new kakao.maps.InfoWindow({ zIndex:1 });
        this.ps = new kakao.maps.services.Places();
      }, 100)
    },
    placesSearchCB: function(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // MARK: 기존 마커 삭제
        if(this.markers.length !== 0) {
          for(let i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null)
          }
          this.markers = []
        }
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();

        this.places = []
        this.mapStyle.height = '40%'
        this.placeListStyle.display = 'block'
        this.placeListStyle.height = '40%'
        for (let i=0; i<data.length; i++) {
          this.places.push(data[i])
          this.displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        this.map.setBounds(bounds);
      }
    },
    // 지도에 마커를 표시하는 함수입니다
    displayMarker: function(place) {
      // 마커를 생성하고 지도에 표시합니다
      const marker = new kakao.maps.Marker({
        map: this.map,
        position: new kakao.maps.LatLng(place.y, place.x)
      });
      this.markers.push(marker)
      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', () => {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        this.infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        this.infowindow.open(this.map, marker);
      });
    },
    search: function() {
      this.ps.keywordSearch(this.searchText, this.placesSearchCB);
      this.searchText = ''
    }
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

<style scoped>
.my-card {
  margin: 5px;
}
</style>
