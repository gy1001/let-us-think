import { createApp } from 'vue'
import store from './store'
import './app.scss'
import {
  Button,
  Radio,
  RadioGroup,
  Form,
  FormItem,
  Countup,
} from '@nutui/nutui-taro'

const App = createApp({
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
;[Radio, RadioGroup, Button, Form, FormItem, Countup].forEach((component) => {
  App.use(component)
})
App.use(store)

export default App
