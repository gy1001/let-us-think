<template>
  <nut-noticebar scrollable :text="text" />
  <nut-swiper
    :init-page="2"
    :auto-play="3000"
    pagination-visible
    pagination-color="red"
    pagination-unselected-color="#fff"
    style="height: 150px"
  >
    <nut-swiper-item
      v-for="(item, index) in list"
      :key="index"
      style="height: 150px"
    >
      <img
        :src="item"
        alt=""
        style="height: 100%; width: 100%"
        draggable="false"
      />
    </nut-swiper-item>
  </nut-swiper>

  <nut-cell-group title="小工具集合" desc="一些常用的小工具集合">
    <nut-cell @click="handleToTodoPage" title="我的待办项" is-link></nut-cell>
  </nut-cell-group>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Taro from '@tarojs/taro';

const text = ref(
  '此小程序是使用 taro + vue3 + webpack + NutUI 技术栈，自我练习使用中，会持续迭代，欢迎使用以及提意见'
);
const list = ref([
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]);

const handleToTodoPage = () => {
  Taro.navigateTo({
    url: '/todos/pages/index/index',
  });
};
</script>
<style lang="less"></style>
