<template>
  <template v-for="friend in friends" v-bind:key="friend">
    <div
      class="friend-list-item list-group-item list-group-item-action py-3 lh-tight d-flex align-items-center"
      aria-current="true"
      @click="toFriendInfo(user.user_id, friend.user_id);">
      <div class="friend-img-box img-box">
        <img class="friend-img" :src="friend.image"  alt="...">
      </div>
      <div class="friend-name">
        <div class="placeholder-glow d-flex justify-content-start fs-3">
          <span>{{friend.name}}</span>
        </div>
      </div>
    </div>
  </template>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'MainFriends',
  setup() {
    return {};
  },
  data() {
    return {
      friends: [],
      user: {}
    }
  },
  methods: {
    toFriendInfo: function (user_id, friend_id) {
      this.$router.push({
        name: 'mainFriendInfo',
        params: {
          user_id: user_id,
          friend_id: friend_id
        }
      })
    }
  }
});
</script>

<style scoped></style>
