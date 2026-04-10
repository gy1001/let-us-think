<template>
  <view class="note-detail-page">
    <!-- 标题输入 -->
    <nut-input
      v-model="noteForm.title"
      placeholder="请输入标题"
      class="title-input"
    />

    <!-- 分类选择 -->
    <view class="category-row">
      <text class="label">分类：</text>
      <nut-radio-group v-model="noteForm.category" direction="horizontal">
        <nut-radio label="技术">技术</nut-radio>
        <nut-radio label="生活">生活</nut-radio>
        <nut-radio label="其他">其他</nut-radio>
      </nut-radio-group>
    </view>

    <!-- 内容输入 -->
    <nut-textarea
      v-model="noteForm.content"
      placeholder="请输入笔记内容..."
      :max-length="5000"
      :autosize="{ minHeight: 300 }"
      class="content-input"
    />

    <!-- 底部操作栏 -->
    <view class="action-bar">
      <nut-button type="default" @click="handleCancel">取消</nut-button>
      <nut-button type="primary" @click="handleSave">保存</nut-button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Taro, { useRouter } from '@tarojs/taro';

const router = useRouter();

const noteForm = ref({
  id: 0,
  title: '',
  content: '',
  category: '其他',
});

onMounted(() => {
  const { id } = router.params;
  if (id) {
    // 加载笔记详情
    noteForm.value.id = Number(id);
    // 这里应该从存储或 API 获取数据
    Taro.setNavigationBarTitle({ title: '编辑笔记' });
  } else {
    Taro.setNavigationBarTitle({ title: '新建笔记' });
  }
});

const handleCancel = () => {
  Taro.navigateBack();
};

const handleSave = () => {
  if (!noteForm.value.title.trim()) {
    Taro.showToast({ title: '请输入标题', icon: 'none' });
    return;
  }
  if (!noteForm.value.content.trim()) {
    Taro.showToast({ title: '请输入内容', icon: 'none' });
    return;
  }

  // 保存笔记逻辑
  Taro.showToast({ title: '保存成功', icon: 'success' });
  setTimeout(() => {
    Taro.navigateBack();
  }, 1500);
};
</script>

<style lang="less">
.note-detail-page {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 10px;

  .title-input {
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .category-row {
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 10px;

    .label {
      font-size: 14px;
      color: #666;
    }
  }

  .content-input {
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .action-bar {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;

    .nut-button {
      flex: 1;
      margin: 0 5px;
    }
  }
}
</style>
