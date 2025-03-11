<template>
  <view class="web-page-container">
    <!-- 使用 <web-view> 组件嵌套 Web 页面 -->
    <web-view :src="webUrl"></web-view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

// 定义要嵌入的 Web 页面的 URL
const webUrl = ref('https://mp.weixin.qq.com/s/lIPRalzTSYQiaq_yXQ9rng');
</script>

<style lang="less">
.web-page-container {
  width: 100%;
  height: 100vh; /* 设置容器高度为视口高度 */
}

web-view {
  width: 100%;
  height: 100%; /* 设置 <web-view> 组件高度为 100% */
}
</style>
