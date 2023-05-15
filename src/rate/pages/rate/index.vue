<template>
  <view>
    <nut-cell-group title="婚姻状况">
      <nut-radio-group v-model="radioVal" direction="horizontal">
        <nut-radio shape="button" label="1">单身</nut-radio>
        <nut-radio shape="button" label="2">已婚</nut-radio>
      </nut-radio-group>
    </nut-cell-group>

    <nut-form>
      <nut-form-item label="法语听力">
        <nut-radio-group direction="horizontal" v-model="basicData.listen">
          <nut-radio label="1">会</nut-radio>
          <nut-radio label="2">否</nut-radio>
        </nut-radio-group>
      </nut-form-item>
      <nut-form-item label="法语口语">
        <nut-radio-group direction="horizontal" v-model="basicData.speak">
          <nut-radio label="1">会</nut-radio>
          <nut-radio label="2">否</nut-radio>
        </nut-radio-group>
      </nut-form-item>
      <nut-form-item label="法语阅读">
        <nut-radio-group direction="horizontal" v-model="basicData.read">
          <nut-radio label="1">会</nut-radio>
          <nut-radio label="2">否</nut-radio>
        </nut-radio-group>
      </nut-form-item>
      <nut-form-item label="法语写作">
        <nut-radio-group direction="horizontal" v-model="basicData.write">
          <nut-radio label="1">会</nut-radio>
          <nut-radio label="2">否</nut-radio>
        </nut-radio-group>
      </nut-form-item>
      <nut-form-item label="法语英语综合">
        <nut-radio-group direction="horizontal" v-model="basicData.write">
          <nut-radio label="1">会</nut-radio>
          <nut-radio label="2">否</nut-radio>
        </nut-radio-group>
      </nut-form-item>
      <nut-form-item v-model="basicData.age" label="年龄">
        <nut-input
          class="nut-input-text"
          placeholder="请输入地址"
          type="text"
          clearable
        />
      </nut-form-item>
      <nut-form-item v-model="basicData.workAge" label="工作年龄">
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
  listen: '',
  speak: '',
  read: '',
  name: '',
  age: '',
  tel: '',
  address: '',
  workAge: '',
  write: '',
})
</script>

<style scoped></style>
