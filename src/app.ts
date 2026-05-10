import { createApp } from 'vue';
import Taro from '@tarojs/taro';
import './app.less';
import './styles/font/iconfont.css';

// 检测小程序更新并提示用户重启
// 微信小程序在启动时会自动在后台检查是否有新版本并静默下载，
// getUpdateManager 提供监听下载结果的能力，无需手动请求版本号接口
function checkUpdate() {
  // getUpdateManager 仅在微信小程序环境中存在，H5 / 其他平台直接跳过
  if (!Taro.getUpdateManager) return;

  const updateManager = Taro.getUpdateManager();

  // 新版本下载完成后触发（下载由微信客户端在后台自动完成）
  // 此时才弹框，避免下载未完成就让用户重启
  updateManager.onUpdateReady(() => {
    Taro.showModal({
      title: '发现新版本',
      content: '新版本已准备好，重启后即可使用，是否立即重启？',
      confirmText: '立即重启',
      cancelText: '稍后再说',
      success(res) {
        if (res.confirm) {
          // 调用 applyUpdate 强制重启小程序并应用新版本
          updateManager.applyUpdate();
        }
        // 用户选择"稍后再说"则本次不处理，下次启动时会再次触发
      },
    });
  });

  // 新版本下载失败时触发（通常为网络异常）
  updateManager.onUpdateFailed(() => {
    Taro.showModal({
      title: '更新失败',
      content: '新版本下载失败，请检查网络后重试',
      showCancel: false,
      confirmText: '我知道了',
    });
  });
}

const App = createApp({
  // onLaunch 在小程序初始化完成时触发，全局只触发一次，适合做启动检测
  onLaunch() {
    checkUpdate();
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

export default App;
