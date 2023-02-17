<script setup>
import RatingStars from 'components/RatingStars.vue';
</script>
<template>
  <div class="column">
    <q-card class="column content-center" style="text-align: center;">
      <q-avatar rounded size="180px">
        <img id="preview-image" :src="this.$q.cookies.get('user_image')">
      </q-avatar>
      <q-card-section>
        <div class="text-h6">{{this.$q.cookies.get('user_nickname')}}</div>
        <div class="text-subtitle2">{{this.$q.cookies.get('user_id')}}</div>
      </q-card-section>
      <div>
        <input type="file" ref="fileElem" multiple accept="image/*" style="display:none" @change="handleFiles($event)">
        <q-btn type="button" @click="fileSelect" style="background: goldenrod; color: white; margin: 10px;" label="프로필 이미지 변경" />
      </div>
    </q-card>
  </div>
  <div>
    <q-card class="column content-center">
      <q-scroll-area style='width: 100%; height: 150px;'>
        <span style='display:block!important;'>높은 점수를 준 음식들</span>
        <div id="high-rating-holder" class='no-wrap row' style='max-width: 100%; overflow-x: auto'>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://www.cheftruck.kr/data/editor/1901/953aaf28c9dd17d24fede08939e64dae_1548412729_2913.JPG"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">야채곱창</span>
            <rating-stars
              :rating='10'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://www.cheftruck.kr/data/editor/1901/953aaf28c9dd17d24fede08939e64dae_1548412729_2913.JPG"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">야채곱창</span>
            <rating-stars
              :rating='10'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://www.cheftruck.kr/data/editor/1901/953aaf28c9dd17d24fede08939e64dae_1548412729_2913.JPG"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">야채곱창</span>
            <rating-stars
              :rating='10'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://www.cheftruck.kr/data/editor/1901/953aaf28c9dd17d24fede08939e64dae_1548412729_2913.JPG"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">야채곱창</span>
            <rating-stars
              :rating='10'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://www.cheftruck.kr/data/editor/1901/953aaf28c9dd17d24fede08939e64dae_1548412729_2913.JPG"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">야채곱창</span>
            <rating-stars
              :rating='10'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://www.cheftruck.kr/data/editor/1901/953aaf28c9dd17d24fede08939e64dae_1548412729_2913.JPG"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">야채곱창</span>
            <rating-stars
              :rating='10'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://www.cheftruck.kr/data/editor/1901/953aaf28c9dd17d24fede08939e64dae_1548412729_2913.JPG"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">야채곱창</span>
            <rating-stars
              :rating='10'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://www.cheftruck.kr/data/editor/1901/953aaf28c9dd17d24fede08939e64dae_1548412729_2913.JPG"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">야채곱창</span>
            <rating-stars
              :rating='10'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://www.cheftruck.kr/data/editor/1901/953aaf28c9dd17d24fede08939e64dae_1548412729_2913.JPG"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">야채곱창</span>
            <rating-stars
              :rating='10'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://www.cheftruck.kr/data/editor/1901/953aaf28c9dd17d24fede08939e64dae_1548412729_2913.JPG"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">야채곱창</span>
            <rating-stars
              :rating='10'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
          <template v-for="high_rating in high_ratings" v-bind:key="high_rating">
            <div>
              <div>
                <div>
                  <img :src="high_rating.image" alt="..."/>
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
      </q-scroll-area>
      <q-scroll-area style='width: 100%; height: 150px;'>
        <span style="display:block;">낮은 점수를 준 음식들</span>
        <div id="low-rating-holder" class='no-wrap row' style='max-width: 100%; overflow-x: auto'>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://berlinreport.com/data/file/essen/thumb-1351197962_n7SiqPsj_9c6edaeccdff753b8e1986f95e429e07a7037495_800x450.jpg"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">가지볶음</span>
            <rating-stars
              :rating='1'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://berlinreport.com/data/file/essen/thumb-1351197962_n7SiqPsj_9c6edaeccdff753b8e1986f95e429e07a7037495_800x450.jpg"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">가지볶음</span>
            <rating-stars
              :rating='1'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://berlinreport.com/data/file/essen/thumb-1351197962_n7SiqPsj_9c6edaeccdff753b8e1986f95e429e07a7037495_800x450.jpg"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">가지볶음</span>
            <rating-stars
              :rating='1'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://berlinreport.com/data/file/essen/thumb-1351197962_n7SiqPsj_9c6edaeccdff753b8e1986f95e429e07a7037495_800x450.jpg"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">가지볶음</span>
            <rating-stars
              :rating='1'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://berlinreport.com/data/file/essen/thumb-1351197962_n7SiqPsj_9c6edaeccdff753b8e1986f95e429e07a7037495_800x450.jpg"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">가지볶음</span>
            <rating-stars
              :rating='1'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://berlinreport.com/data/file/essen/thumb-1351197962_n7SiqPsj_9c6edaeccdff753b8e1986f95e429e07a7037495_800x450.jpg"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">가지볶음</span>
            <rating-stars
              :rating='1'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://berlinreport.com/data/file/essen/thumb-1351197962_n7SiqPsj_9c6edaeccdff753b8e1986f95e429e07a7037495_800x450.jpg"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">가지볶음</span>
            <rating-stars
              :rating='1'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://berlinreport.com/data/file/essen/thumb-1351197962_n7SiqPsj_9c6edaeccdff753b8e1986f95e429e07a7037495_800x450.jpg"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">가지볶음</span>
            <rating-stars
              :rating='1'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://berlinreport.com/data/file/essen/thumb-1351197962_n7SiqPsj_9c6edaeccdff753b8e1986f95e429e07a7037495_800x450.jpg"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">가지볶음</span>
            <rating-stars
              :rating='1'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
          <div style='margin: 5px;'>
            <div>
              <div>
                <img
                  src="http://berlinreport.com/data/file/essen/thumb-1351197962_n7SiqPsj_9c6edaeccdff753b8e1986f95e429e07a7037495_800x450.jpg"
                  alt="..."
                  style='width: 60px;'
                />
              </div>
            </div>
            <span style="display: block;">가지볶음</span>
            <rating-stars
              :rating='1'
              :static='true'
              width="6px"
              height="12px"></rating-stars>
          </div>
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
      </q-scroll-area>
      <q-btn type="button" @click="modal = true" style="background: goldenrod; color: white" label="평가한 음식" />
    </q-card>
    <q-dialog v-model="modal">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">내 음식</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div style="overflow: auto">
            <template v-for="(item, idx) in ratingInfo" v-bind:key="idx">
              <div class="row justify-center">
                <div class="box" style="margin: 10px;">
                  <img class="box-image" :src="item.image" />
                </div>
                <div class="food-info" style="margin: 10px 0">
                  <div>
                    <p style="margin: 0 !important; font-size: 14px">
                      {{ item.name }}
                    </p>
                  </div>
                  <RatingStars
                    :id="item.id"
                    :rating='item.rating'
                    :static='true'
                    width="12px"
                    height="24px"
                  ></RatingStars>
                </div>
              </div>
            </template>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'MainMyInfo',
  setup() {
    const $q = useQuasar()
    return {
      $q,

    };
  },
  data() {
    return {
      format: '',
      image: '',
      fileName: '',
      filePath: '',
      filePathGlobal: '',
      modal: ref(false),
      ratingInfo: {}
    }
  },
  methods: {
    async handleFiles(event) {
      const reader = new FileReader();
      const files = event.target.files;
      const file = files[0];
      // MARK: 이미지 파일 여부 검사
      if (!file.type.startsWith('image/')) return;
      // MARK: reader가 이미지 읽도록 하기
      reader.readAsDataURL(file);
      // MARK: 이미지가 로드가 된 경우
      reader.onload = async (e) => {
        const idx = file.name.indexOf('.');
        this.format = file.name.substring(idx + 1).toLowerCase();
        if(this.format === 'gif' || this.format == 'GIF') {
          alert('움직이는 이미지는 사용 불가능해요')
        }
        else {
          document.getElementById('preview-image').src = e.target.result;
          this.image = e.target.result;
          this.fileName = `${this.$q.cookies.get('user_nickname')}.${this.format}`;
          this.filePath = `${process.env.SERVER_PATH}\\public\\images\\userImages\\${this.fileName}`;
          // MARK: uri 인코딩
          this.filePathGlobal = `http://localhost:3000/images/userImages/`+encodeURIComponent(this.fileName)
          this.$q.cookies.set('user_image', this.filePathGlobal)
          await fetch('http://127.0.0.1:3000/DAO/UPDATE', {
            method: 'POST',
            body: new URLSearchParams({
              table: 'user',
              set: `user_image = '${this.filePathGlobal}'`,
              where: `user_id = '${this.$q.cookies.get('user_id')}'`,
            }),
          });
          await fetch('http://127.0.0.1:3000/fileHandler', {
            method: 'POST',
            body: new URLSearchParams({
              file: this.image,
              path: this.filePath,
              format: this.format
            }),
          });
        }
      };
    },
    fileSelect() {
      this.$refs.fileElem.click()
    }
  },
  computed: {
  },
  async mounted() {
    const my_ratings = await (
      await fetch('http://127.0.0.1:3000/DAO/SELECT', {
        method: 'POST',
        body: new URLSearchParams({
          columns: 'id, rating, name, image',
          table: 'rating,food',
          where: `rating.food_id = food.id and rating.user_id = ${this.$q.cookies.get('user_key')}`,
        }),
      })
    ).json();
    my_ratings.forEach((my_rating) => {
      this.ratingInfo[my_rating.id] = {
        id: my_rating.id,
        rating: my_rating.rating,
        name: my_rating.name,
        image: my_rating.image
      }
    })
  }
});
</script>

<style scoped>
.box {
  width: 25%;
  border-radius: 20%;
  overflow: hidden;
}
.box-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
