<template>
  <div class="demo-list">
    <nut-list
      :list-data="data"
      :container-height="700"
      @scroll-bottom="onScrollBottom"
    >
      <template #default="{ index }">
        <div class="list-item" @click="handleToNoteDetail">
          {{ index }}: 点击跳转哦
        </div>
      </template>
    </nut-list>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Taro from '@tarojs/taro';

const data = ref(new Array(100).fill(0));
onMounted(() => {
  data.value = data.value.map((_: number, index: number) => index + 1);
});
const onScrollBottom = () => {
  let arr = new Array(100).fill(0);
  const len = data.value.length;
  data.value = data.value.concat(
    arr.map((_: number, index: number) => len + index + 1)
  );
};
const handleToNoteDetail = () => {
  Taro.navigateTo({
    url: '/notes/pages/detail/index',
  });
};
</script>

<style lang="less">
.demo-list {
  width: 100%;
  height: 100%;
}

.demo-list .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
  height: 150px;
  background-color: #f4a8b6;
  border-radius: 10px;
}
</style>
