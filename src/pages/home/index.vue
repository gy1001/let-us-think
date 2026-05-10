<template>
  <view class="home-page">
    <!-- 顶部公告栏 -->
    <nut-noticebar scrollable :text="noticeText" />

    <!-- 轮播图 -->
    <nut-swiper
      :init-page="0"
      :auto-play="3000"
      pagination-visible
      pagination-color="#1890ff"
      pagination-unselected-color="#fff"
      class="banner-swiper"
    >
      <nut-swiper-item v-for="(item, index) in bannerList" :key="index">
        <img :src="item" alt="banner" class="banner-img" draggable="false" />
      </nut-swiper-item>
    </nut-swiper>

    <!-- 功能入口 -->
    <view class="quick-entry">
      <nut-grid :column-num="4" :border="false">
        <nut-grid-item text="待办" @click="handleToTodoPage">
          <template #icon>
            <Edit width="24" height="24"></Edit>
          </template>
        </nut-grid-item>
        <nut-grid-item text="笔记" @click="handleToNotes">
          <template #icon>
            <Tips width="24" height="24"></Tips>
          </template>
        </nut-grid-item>
        <nut-grid-item text="收藏" @click="handleToFavorite">
          <template #icon>
            <Star width="24" height="24"></Star>
          </template>
        </nut-grid-item>
        <nut-grid-item text="设置" @click="handleToSetting">
          <template #icon>
            <Setting width="24" height="24"></Setting>
          </template>
        </nut-grid-item>
      </nut-grid>
    </view>

    <!-- 最近待办 -->
    <nut-cell-group title="最近待办">
      <nut-cell
        v-for="(item, index) in recentTodos"
        :key="index"
        :title="item.title"
        :desc="item.date"
        is-link
        @click="handleToTodoPage"
      ></nut-cell>
      <nut-cell
        title="喜帖随礼录入"
        desc="记录随礼人员与金额"
        is-link
        @click="handleToGiftPage"
      ></nut-cell>
      <nut-empty
        v-if="recentTodos.length === 0"
        description="暂无待办事项"
      ></nut-empty>
    </nut-cell-group>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Taro from '@tarojs/taro';
import { Edit, Tips, Star, Setting } from '@nutui/icons-vue-taro';

const noticeText = ref('欢迎使用 Let Us Think，记录你的思考和灵感');

const bannerList = ref([
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
]);

const recentTodos = ref([
  { title: '完成项目文档', date: '今天' },
  { title: '学习 Taro 框架', date: '明天' },
  { title: '整理笔记', date: '后天' },
]);

const handleToTodoPage = () => {
  Taro.navigateTo({
    url: '/todos/pages/index/index',
  });
};

const handleToNotes = () => {
  Taro.switchTab({
    url: '/pages/notes/index',
  });
};

const handleToFavorite = () => {
  Taro.showToast({ title: '功能开发中', icon: 'none' });
};

const handleToSetting = () => {
  Taro.switchTab({
    url: '/pages/mine/index',
  });
};

const handleToGiftPage = () => {
  Taro.navigateTo({
    url: '/gifts/pages/index/index',
  });
};
</script>

<style lang="less">
.home-page {
  min-height: 100vh;
  background-color: #f5f5f5;

  .banner-swiper {
    height: 150px;

    .banner-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .quick-entry {
    margin: 10px 0;
    background-color: #fff;
  }
}
</style>
