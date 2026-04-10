<template>
  <view class="notes-page">
    <!-- 搜索栏 -->
    <nut-searchbar
      v-model="searchValue"
      placeholder="搜索笔记"
      @search="handleSearch"
    />

    <!-- 笔记列表 -->
    <view class="notes-list">
      <nut-list
        :list-data="noteList"
        :container-height="600"
        @scroll-bottom="onScrollBottom"
      >
        <template #default="{ item, index }">
          <view class="note-item" @click="handleToNoteDetail(item)">
            <view class="note-title">{{ item.title }}</view>
            <view class="note-content">{{ item.content }}</view>
            <view class="note-footer">
              <text class="note-date">{{ item.date }}</text>
              <text class="note-category">{{ item.category }}</text>
            </view>
          </view>
        </template>
      </nut-list>
    </view>

    <!-- 新建笔记按钮 -->
    <view class="add-btn" @click="handleAddNote">
      <Plus width="24" height="24"></Plus>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Taro from '@tarojs/taro';
import { Plus } from '@nutui/icons-vue-taro';

interface Note {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
}

const searchValue = ref('');
const noteList = ref<Note[]>([]);

onMounted(() => {
  // 初始化笔记数据
  noteList.value = [
    { id: 1, title: 'Taro 学习笔记', content: 'Taro 是一个开放式跨端跨框架解决方案...', date: '2026-04-10', category: '技术' },
    { id: 2, title: 'Vue3 Composition API', content: 'Composition API 是 Vue3 最重要的特性之一...', date: '2026-04-09', category: '技术' },
    { id: 3, title: '生活感悟', content: '今天天气很好，适合出去走走...', date: '2026-04-08', category: '生活' },
  ];
});

const onScrollBottom = () => {
  const len = noteList.value.length;
  const newNotes: Note[] = [
    { id: len + 1, title: `笔记 ${len + 1}`, content: '这是新添加的笔记内容...', date: '2026-04-07', category: '其他' },
    { id: len + 2, title: `笔记 ${len + 2}`, content: '这是新添加的笔记内容...', date: '2026-04-06', category: '其他' },
  ];
  noteList.value = [...noteList.value, ...newNotes];
};

const handleSearch = () => {
  Taro.showToast({ title: `搜索: ${searchValue.value}`, icon: 'none' });
};

const handleToNoteDetail = (note: Note) => {
  Taro.navigateTo({
    url: `/notes/pages/detail/index?id=${note.id}`,
  });
};

const handleAddNote = () => {
  Taro.navigateTo({
    url: '/notes/pages/detail/index',
  });
};
</script>

<style lang="less">
.notes-page {
  min-height: 100vh;
  background-color: #f5f5f5;

  .notes-list {
    padding: 12px;

    .note-item {
      background-color: #fff;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 12px;

      .note-title {
        font-weight: 600;
        color: #1a1a1a;
        margin-bottom: 10px;
        line-height: 1.4;
        //font-size: 34px;
      }

      .note-content {
        font-size: 26px;
        color: #666;
        line-height: 1.6;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-bottom: 12px;
      }

      .note-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 22px;
        color: #999;

        .note-category {
          background-color: #e6f7ff;
          color: #1890ff;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 22px;
        }
      }
    }
  }

  .add-btn {
    position: fixed;
    right: 20px;
    bottom: 100px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1890ff 0%, #36cfc9 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    box-shadow: 0 4px 16px rgba(24, 144, 255, 0.4);
  }
}
</style>
