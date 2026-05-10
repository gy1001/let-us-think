<template>
  <view class="gift-page">
    <!-- 录入表单 -->
    <view class="form-section">
      <nut-cell-group title="新增随礼记录">
        <nut-cell title="姓名">
          <template #link>
            <nut-input
              v-model="form.name"
              placeholder="请输入姓名"
              text-align="right"
              :border="false"
            />
          </template>
        </nut-cell>
        <nut-cell title="金额（元）">
          <template #link>
            <nut-input
              v-model="form.amount"
              placeholder="请输入金额"
              type="digit"
              text-align="right"
              :border="false"
            />
          </template>
        </nut-cell>
        <nut-cell title="日期" :desc="form.date" is-link @click="showDatePicker = true" />
      </nut-cell-group>

      <view class="add-btn">
        <nut-button type="primary" block @click="handleAdd">添加记录</nut-button>
      </view>
    </view>

    <!-- 记录列表 -->
    <nut-cell-group v-if="records.length > 0" title="随礼记录">
      <nut-swipe v-for="(item, index) in records" :key="item.id">
        <nut-cell :title="item.name" :desc="item.date">
          <template #link>
            <text class="amount-text">¥{{ item.amount }}</text>
          </template>
        </nut-cell>
        <template #right>
          <view class="delete-btn" @click="handleDelete(index)">删除</view>
        </template>
      </nut-swipe>
    </nut-cell-group>

    <nut-empty v-if="records.length === 0" description="暂无随礼记录" />

    <!-- 总计 -->
    <view v-if="records.length > 0" class="total-section">
      <view class="total-label">合计金额</view>
      <view class="total-amount">¥{{ totalAmount.toFixed(2) }}</view>
      <view class="total-chinese">{{ toChineseAmount(totalAmount) }}</view>
    </view>

    <!-- 日期选择器 -->
    <nut-date-picker
      v-model:visible="showDatePicker"
      :min-date="new Date(2000, 0, 1)"
      :max-date="new Date(2099, 11, 31)"
      @confirm="onDateConfirm"
    />
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Taro from '@tarojs/taro';

interface GiftRecord {
  id: number;
  name: string;
  amount: number;
  date: string;
}

const form = ref({
  name: '',
  amount: '',
  date: new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-'),
});

const records = ref<GiftRecord[]>([]);
const showDatePicker = ref(false);
let nextId = 1;

const totalAmount = computed(() =>
  records.value.reduce((sum, r) => sum + r.amount, 0)
);

function onDateConfirm({ selectedValue }: { selectedValue: string[] }) {
  form.value.date = selectedValue.join('-');
}

function handleAdd() {
  const name = form.value.name.trim();
  const amount = parseFloat(form.value.amount);

  if (!name) {
    Taro.showToast({ title: '请输入姓名', icon: 'none' });
    return;
  }
  if (!form.value.amount || isNaN(amount) || amount <= 0) {
    Taro.showToast({ title: '请输入有效金额', icon: 'none' });
    return;
  }

  records.value.unshift({
    id: nextId++,
    name,
    amount,
    date: form.value.date,
  });

  form.value.name = '';
  form.value.amount = '';
  Taro.showToast({ title: '添加成功', icon: 'success' });
}

function handleDelete(index: number) {
  records.value.splice(index, 1);
}

// 数字转中文大写金额
function toChineseAmount(num: number): string {
  if (num === 0) return '零元整';

  const digits = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const units = ['', '拾', '佰', '仟'];
  const bigUnits = ['', '万', '亿', '万亿'];

  const intPart = Math.floor(num);
  const decPart = Math.round((num - intPart) * 100);
  const jiao = Math.floor(decPart / 10);
  const fen = decPart % 10;

  function intToZh(n: number): string {
    if (n === 0) return '零';
    let result = '';
    let zeroFlag = false;
    const str = String(n);
    const len = str.length;

    for (let i = 0; i < len; i++) {
      const d = parseInt(str[i]);
      const pos = len - 1 - i;
      const unitIdx = pos % 4;
      const bigUnitIdx = Math.floor(pos / 4);

      if (d === 0) {
        zeroFlag = true;
      } else {
        if (zeroFlag) {
          result += '零';
          zeroFlag = false;
        }
        result += digits[d] + units[unitIdx];
      }

      if (unitIdx === 0 && bigUnitIdx > 0) {
        // 去掉尾部零后加大单位
        result = result.replace(/零+$/, '') + bigUnits[bigUnitIdx];
        zeroFlag = false;
      }
    }
    return result;
  }

  let result = intToZh(intPart) + '元';

  if (jiao === 0 && fen === 0) {
    result += '整';
  } else if (jiao === 0) {
    result += '零' + digits[fen] + '分';
  } else {
    result += digits[jiao] + '角';
    if (fen > 0) result += digits[fen] + '分';
  }

  return result;
}
</script>

<style lang="less">
.gift-page {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: 40px;

  .form-section {
    margin-bottom: 16px;
  }

  .add-btn {
    padding: 12px 16px;
    background-color: #fff;
    margin-top: 1px;
  }

  .amount-text {
    color: #e4393c;
    font-weight: bold;
    font-size: 15px;
  }

  .delete-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 100%;
    background-color: #e4393c;
    color: #fff;
    font-size: 14px;
  }

  .total-section {
    margin: 16px;
    padding: 20px;
    background: linear-gradient(135deg, #ff6b6b, #e4393c);
    border-radius: 12px;
    text-align: center;
    color: #fff;

    .total-label {
      font-size: 14px;
      opacity: 0.85;
      margin-bottom: 8px;
    }

    .total-amount {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .total-chinese {
      font-size: 16px;
      opacity: 0.9;
      letter-spacing: 1px;
    }
  }
}
</style>
