<template>
  <h5 style="text-align: center">당신의 취향을 추가해보세요</h5>
  <template v-for="(item, idx) in items" v-bind:key="idx">
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
  </template>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'MainRating',
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
