<template>
  <nut-checkbox :class="{ throughLine: checked }" class="todo-item-check">
    {{ label }}
  </nut-checkbox>
</template>

<script setup lang="ts">
defineProps({
  id: Number,
  label: String,
  checked: Boolean,
});
</script>

<style lang="less">
.todo-item-check {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-right: 0;

  &.throughLine {
    text-decoration: line-through;
  }
}
</style>
