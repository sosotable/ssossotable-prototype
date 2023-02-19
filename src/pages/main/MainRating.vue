<script setup>
import RatingStars from 'components/RatingStars.vue';
</script>
<template>
  <h5 style="text-align: center">당신의 취향을 추가해보세요</h5>
  <div style="overflow: auto">
    <template v-for="(item, idx) in items" v-bind:key="idx">
      <Transition>
        <div class="row justify-center" v-if="item.show">
          <div class="box" style="margin: 10px;">
            <img class="box-image" :src="item.image" />
          </div>
          <div class="food-info" style="margin: 10px 0">
            <div>
              <p style="margin: 0 !important; font-size: 20px">
                {{ item.name }}
              </p>
            </div>
            <RatingStars
              v-on:rated="rated"
              :id="item.id"
              size="3em"
            ></RatingStars>
          </div>
        </div>
      </Transition>
    </template>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'MainRating',
  setup() {
    return {};
  },
  data() {
    return {
      items: {},
    };
  },
  async mounted() {
    const foodInfo = await (
      await fetch('http://127.0.0.1:3000/DAO/SELECT', {
        method: 'POST',
        body: new URLSearchParams({
          columns: '*',
          table: 'food',
          where:
            `id not in (SELECT food_id ` +
            `FROM rating, food ` +
            `WHERE rating.user_id = ${this.$q.cookies.get('user_key')})`,
        }),
      })
    ).json();
    for (let i = 0; i < foodInfo.length; i++) {
      this.items[foodInfo[i].id] = {
        id: foodInfo[i].id,
        name: foodInfo[i].name,
        image: foodInfo[i].image,
        show: true,
      };
    }
  },
  methods: {
    // MARK: 하위 템플릿에서 이벤트 수신 시 평가 작업 실시
    rated: async function (rating, id) {
      setTimeout(async () => {
        await fetch('http://127.0.0.1:3000/DAO/INSERT', {
          method: 'POST',
          body: new URLSearchParams({
            table: 'rating',
            columns: `user_id, food_id, rating`,
            values: `${this.$q.cookies.get('user_key')}, ${id}, ${rating}`,
          }),
        });
        this.items[id].show = false;
      }, 200);
    },
  }
});
</script>

<style scoped>
.box {
  width: 80px;
  height: 80px;
  border-radius: 20%;
  overflow: hidden;
}
.box-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
