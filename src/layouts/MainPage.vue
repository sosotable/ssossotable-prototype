<template>
  <div class="q-pa-md">
    <q-layout
      view="lHh lpr lFf"
      container
      style="height: 400px"
      class="shadow-2 rounded-borders"
    >
      <q-header bordered class="bg-white text-primary">
        <q-toolbar class="bg-primary glossy text-white">
          <q-btn
            flat
            @click="drawer = !drawer"
            round
            dense
            icon="menu"
            class="q-mr-sm"
          />
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>

          <q-toolbar-title>소소식탁</q-toolbar-title>

          <q-btn flat round dense icon="notifications" />
        </q-toolbar>
      </q-header>
      <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
        <q-scroll-area
          style="
            height: calc(100% - 150px);
            margin-top: 150px;
            border-right: 1px solid #ddd;
          "
        >
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section> Inbox </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section> Star </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section> Send </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section> Drafts </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img
          class="absolute-top"
          src="https://cdn.quasar.dev/img/material.png"
          style="height: 150px"
        >
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-drawer>
      <q-footer bordered class="bg-white text-primary">
        <q-tabs
          v-model="tab"
          dense
          align="justify"
          class="bg-primary text-white shadow-2"
          :breakpoint="0"
        >
          <q-tab name="favorite" icon="favorite" />
          <q-tab name="home" icon="home" />
          <q-tab name="language" icon="language" />
        </q-tabs>
      </q-footer>
      <q-page-container>
        <q-page class="q-pa-md">
          <router-view></router-view>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import MainFeed from 'pages/main/MainFeed.vue';
import MainFriendDiary from 'pages/main/MainFriendDiary.vue';
import MainFriendInfo from 'pages/main/MainFriendInfo.vue';
import MainFriends from 'pages/main/MainFriends.vue';
import MainMyDiary from 'pages/main/MainMyDiary.vue';
import MainMyInfo from 'pages/main/MainMyInfo.vue';
import MainRating from 'pages/main/MainRating.vue';
import MainRecommendation from 'pages/main/MainRecommendation.vue';
import MainRecord from 'pages/main/MainRecord.vue';

export default defineComponent({
  name: 'MainPage',
  setup() {
    const mainFeed = ref < MainFeed > null;
    const mainFriendDiary = ref < MainFriendDiary > null;
    const mainFriendInfo = ref < MainFriendInfo > null;
    const mainFriends = ref < MainFriends > null;
    const mainMyDiary = ref < MainMyDiary > null;
    const mainMyInfo = ref < MainMyInfo > null;
    const mainRating = ref < MainRating > null;
    const mainRecommendation = ref < MainRecommendation > null;
    const mainRecord = ref < MainRecord > null;
    return {
      mainFeed,
      mainFriendDiary,
      mainFriendInfo,
      mainFriends,
      mainMyDiary,
      mainMyInfo,
      mainRating,
      mainRecommendation,
      mainRecord,
      tab: ref('home'),
    };
  },
  data() {
    return {
      drawer: false,
    };
  },
  mounted() {
    console.log(this.drawer);
    this.drawer = false;
    console.log(this.drawer);
  },
});
</script>

<style scoped></style>
