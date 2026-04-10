<template>
  <view class="mine-page">
    <!-- 用户信息区域 -->
    <view class="user-section">
      <nut-avatar size="large">
        <template #icon>
          <My width="28" height="28"></My>
        </template>
      </nut-avatar>
      <view class="user-info">
        <text class="user-name">{{username}}</text>
        <text class="user-desc">{{userDesc}}</text>
      </view>
    </view>

    <!-- 功能列表 -->
    <nut-cell-group title="功能">
      <nut-cell title="我的笔记" is-link>
        <template #icon>
          <Edit width="20" height="20"></Edit>
        </template>
      </nut-cell>
      <nut-cell title="我的待办" is-link>
        <template #icon>
          <Check width="20" height="20"></Check>
        </template>
      </nut-cell>
      <nut-cell title="收藏" is-link>
        <template #icon>
          <Star width="20" height="20"></Star>
        </template>
      </nut-cell>
    </nut-cell-group>

    <nut-cell-group title="设置">
      <nut-cell title="账号设置" is-link>
        <template #icon>
          <Setting width="20" height="20"></Setting>
        </template>
      </nut-cell>
      <nut-cell title="关于我们" is-link>
        <template #icon>
          <Tips width="20" height="20"></Tips>
        </template>
      </nut-cell>
    </nut-cell-group>

    <!-- 底部版本信息 -->
    <view class="version">
      <text>v1.0.0</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { My, Edit, Check, Star, Setting, Tips } from '@nutui/icons-vue-taro';

const username = ref('用户昵称');
const userDesc = ref('路漫漫其修远兮，吾将上下而求索');
</script>

<style lang="less">
.mine-page {
  min-height: 100vh;
  background-color: #f5f5f5;

  .user-section {
    display: flex;
    align-items: center;
    padding: 48px 20px 24px;
    background: linear-gradient(135deg, #1890ff 0%, #36cfc9 100%);

    .user-info {
      margin-left: 18px;
      color: #fff;

      .user-name {
        display: block;
        font-weight: 600;
        margin-bottom: 6px;
      }

      .user-desc {
        display: block;
        font-size: 26px;
        opacity: 0.85;
      }
    }
  }

  .version {
    text-align: center;
    padding: 24px;
    color: #999;
    font-size: 13px;
  }
}
</style>
