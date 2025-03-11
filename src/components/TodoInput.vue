<template>
  <nut-input
    class="container-input"
    v-model="toDoVal"
    placeholder="输入待办事项"
    @keyup.enter="handleAdd"
  >
    <template #right>
      <nut-button @click="handleAdd" type="primary" size="small"
        >确定
      </nut-button>
    </template>
  </nut-input>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const toDoVal = ref('');
const emits = defineEmits(['add']);
const handleAdd = () => {
  const inputValue = String(toDoVal.value).trim();
  if (inputValue) {
    emits('add', inputValue);
    toDoVal.value = '';
  }
};
</script>

<style lang="less"></style>
