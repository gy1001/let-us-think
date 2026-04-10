<template>
  <view class="mine-page">
    <!-- 用户信息区域 -->
    <view class="user-section">
      <nut-avatar size="large">
        <template #icon>
          <My width="24" height="24"></My>
        </template>
      </nut-avatar>
      <view class="user-info">
        <text class="username">用户昵称</text>
        <text class="user-desc">个人简介</text>
      </view>
    </view>

    <!-- 功能列表 -->
    <nut-cell-group title="功能">
      <nut-cell title="我的笔记" is-link>
        <template #icon>
          <Edit width="18" height="18"></Edit>
        </template>
      </nut-cell>
      <nut-cell title="我的待办" is-link>
        <template #icon>
          <Check width="18" height="18"></Check>
        </template>
      </nut-cell>
      <nut-cell title="收藏" is-link>
        <template #icon>
          <Star width="18" height="18"></Star>
        </template>
      </nut-cell>
    </nut-cell-group>

    <nut-cell-group title="设置">
      <nut-cell title="账号设置" is-link>
        <template #icon>
          <Setting width="18" height="18"></Setting>
        </template>
      </nut-cell>
      <nut-cell title="关于我们" is-link>
        <template #icon>
          <Tips width="18" height="18"></Tips>
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
</script>

<style lang="less">
.mine-page {
  min-height: 100vh;
  background-color: #f5f5f5;

  .user-section {
    display: flex;
    align-items: center;
    padding: 40px 20px 20px;
    background: linear-gradient(135deg, #1890ff 0%, #36cfc9 100%);

    .user-info {
      margin-left: 16px;
      color: #fff;

      .username {
        display: block;
        font-size: 18px;
        font-weight: 500;
      }

      .user-desc {
        display: block;
        margin-top: 4px;
        font-size: 12px;
        opacity: 0.8;
      }
    }
  }

  .version {
    text-align: center;
    padding: 20px;
    color: #999;
    font-size: 12px;
  }
}
</style>
