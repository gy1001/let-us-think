<template>
  <view>
    <nut-cell-group title="婚姻状况">
      <nut-radio-group v-model="radioVal" direction="horizontal">
        <nut-radio shape="button" label="1">单身</nut-radio>
        <nut-radio shape="button" label="2">已婚</nut-radio>
      </nut-radio-group>
    </nut-cell-group>

    <nut-form>
      <nut-form-item label="姓名">
        <nut-input
          v-model="basicData.name"
          class="nut-input-text"
          placeholder="请输入姓名"
          type="text"
          clearable
        />
      </nut-form-item>
      <nut-form-item label="年龄">
        <nut-input
          v-model="basicData.age"
          class="nut-input-text"
          placeholder="请输入年龄"
          type="text"
          clearable
        />
      </nut-form-item>
      <nut-form-item label="联系电话">
        <nut-input
          v-model="basicData.tel"
          class="nut-input-text"
          placeholder="请输入联系电话"
          type="text"
          clearable
        />
      </nut-form-item>
      <nut-form-item v-model="basicData.address" label="地址">
        <nut-input
          class="nut-input-text"
          placeholder="请输入地址"
          type="text"
          clearable
        />
      </nut-form-item>
      <nut-form-item label="备注">
        <nut-textarea placeholder="请输入备注" type="text" />
      </nut-form-item>
    </nut-form>

    <nut-countup :init-num="0" :end-num="200" :during="30"></nut-countup>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const radioVal = ref('1')
const basicData = reactive({
  name: '',
  age: '',
  tel: '',
  address: '',
})
</script>

<style scoped></style>
