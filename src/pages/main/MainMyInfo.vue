<template>
  <div>
    <div id="preview" class="img-box col align-self-center" style="margin: 20px auto 20px auto;">
      <img :src="this.user.user_image" id="userImage" class="card-img-top" alt="...">
    </div>
    <div>
      <input type="file" ref="fileElem" multiple accept="image/*" style="display:none" @change="handleFiles($event)">
      <input type="button" class="btn" @click="fileSelect" value="프로필 이미지 변경" style="background-color:#e4bd74; color:white;">
    </div>
  </div>
  <div class="card-body">
    <h5 class="card-title">{{this.user.user_name}}</h5>
    <div id="high-rating">
      <span style="display:block;">높은 점수를 준 음식들</span>
      <div id="high-rating-holder" class="rating-view d-flex">
        <template v-for="high_rating in high_ratings" v-bind:key="high_rating">
          <div>
            <div>
              <div class="rating-box">
                <img class="img-box" :src="high_rating.image" alt="..."/>
              </div>
            </div>
            <span style="display: block;">{{high_rating.name}}</span>
            <RatingStars
              v-on:rated="rated"
              :id="high_rating.id"
              width="20px"
              height="40px"
            ></RatingStars>
          </div>
        </template>
      </div>
    </div>
    <div id="low-rating" >
      <span style="display:block;">낮은 점수를 준 음식들</span>
      <div id="low-rating-holder" class="rating-view d-flex">
        <template v-for="low_rating in low_ratings" v-bind:key="low_rating">
          <div>
            <div>
              <div class="rating-box">
                <img class="img-box" :src="low_rating.image" alt="..."/>
              </div>
            </div>
            <span style="display: block;">{{low_rating.name}}</span>
            <RatingStars
              v-on:rated="rated"
              :id="low_rating.id"
              width="20px"
              height="40px"
            ></RatingStars>
          </div>
        </template>
      </div>
    </div>
    <div id="my-info-taste">
      <span class="card-title" style="display: block">음식 취향 순위</span>
      <div>
        <div class="card-img-top" id="taste-list" style="">
          <img id="taste-image" style="width: 100%" :src="taste_ranking">
        </div>
      </div>
    </div>
    <input type="button" value="평가한 음식" class="btn" style="background-color:#e4bd74; color:white; width: 100%;" data-bs-toggle="modal" data-bs-target="#myInfoModal">
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'MainMyInfo',
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
