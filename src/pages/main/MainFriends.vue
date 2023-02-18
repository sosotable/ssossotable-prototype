<template>
  <q-item style='margin: 5px;'>
    <q-item-section avatar>
      <q-avatar>
        <img src="https://i.pinimg.com/564x/43/09/78/43097860e53ce742582262908cfafff8.jpg">
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>농담곰</q-item-label>
      <q-item-label caption>damgom@nagano.com</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />
  <q-item style='margin: 5px;'>
    <q-item-section avatar>
      <q-avatar>
        <img src="https://i.pinimg.com/564x/0d/50/e9/0d50e9effc223ae7c170f617f1ebbde5.jpg">
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>두더지 고로케</q-item-label>
      <q-item-label caption>gorogoro@nagano.com</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />
  <q-item style='margin: 5px;'>
    <q-item-section avatar>
      <q-avatar>
        <img src="https://i.pinimg.com/564x/b6/af/d6/b6afd6f3c8050ec57f866e860af11d63.jpg">
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>하치와레</q-item-label>
      <q-item-label caption>hachi@nagano.com</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />
  <template v-for="friend in friends" v-bind:key="friend">
    <q-item @click="toFriendInfo(user.user_id, friend.user_id);">
      <q-item-section avatar>
        <q-avatar>
          <img :src="friend.image">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{friend.nickname}}</q-item-label>
        <q-item-label caption>{{friend.id}}</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator />
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
