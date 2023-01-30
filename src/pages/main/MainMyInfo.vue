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
      <div id="high-rating">
        <span style="display:block;">높은 점수를 준 음식들</span>
        <div id="high-rating-holder" >
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
      <q-btn type="button" @click="fileSelect" style="background: goldenrod; color: white" label="평가한 음식" />
    </q-card>
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
      filePathGlobal: ''
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
    console.log(this.$q.cookies.get('user_image'))
  }
});
</script>

<style scoped></style>
