<template>
  <view class="index">
    <nut-button type="primary" @click="jumpToRate">去评分</nut-button>
  </view>
</template>

<script setup lang="ts">
import Taro from '@tarojs/taro'
const jumpToRate = () => {
  Taro.navigateTo({
    url: '/rate/pages/rate/index',
  })
}
</script>
<script lang="ts">
export default {
  name: 'App-Index',
}
</script>

<style lang="scss">
.index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
