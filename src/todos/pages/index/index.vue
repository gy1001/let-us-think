<template>
  <div class="todo-list-container">
    <TodoList></TodoList>
  </div>
</template>

<script setup lang="ts">
import TodoList from '../../../components/TodoList.vue';
</script>

<style lang="less">
.todo-list {
  width: 100%;
  height: 100%;
}
</style>
