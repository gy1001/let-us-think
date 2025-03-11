<template>
  <div class="todo-list-container">
    <TodoInput @add="handleAddTodo"></TodoInput>
    <div class="todo-content">
      <nut-divider> 待办事项 ({{ toDoList.length }}项)</nut-divider>
      <TodoItem
        v-for="item in toDoList"
        v-model="item.checked"
        :key="item.id"
        v-bind="item"
      ></TodoItem>
      <nut-divider> 已完成事项 ({{ completedList.length }}项)</nut-divider>
      <TodoItem
        v-for="item in completedList"
        v-model="item.checked"
        :key="item.id"
        v-bind="item"
      ></TodoItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoInput from './TodoInput.vue';
import TodoItem from './TodoItem.vue';
import { computed, ref } from 'vue';
import type { ToDoListSchema } from '../../types/ToDo';

let uuid = 0;
const handleAddTodo = (todoItemLabel: string) => {
  list.value.push({
    label: todoItemLabel,
    checked: false,
    id: uuid++,
  });
};
const list = ref<ToDoListSchema>([]);
const toDoList = computed(() => {
  return list.value.filter((item) => !item.checked);
});
const completedList = computed(() => {
  return list.value.filter((item) => item.checked);
});
</script>

<style lang="less">
.todo-list-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .todo-content {
    flex: 2;
    width: 100%;
    padding: 0 10px 10px 10px;
    box-sizing: border-box;
    overflow-y: auto;
  }
}
</style>
