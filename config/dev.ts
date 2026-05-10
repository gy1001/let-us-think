import type { UserConfigExport } from "@tarojs/cli";

export default {
  logger: {
    quiet: false,
    stats: true,
  },
  mini: {
    // dev 模式下开启代码压缩，解决上传微信开发者工具时包体积超过 2MB 的问题。
    // 正常 dev 模式不压缩是为了方便调试，但压缩后体积大幅减小，
    // 牺牲了部分可读性，必要时可在微信开发者工具中通过 source map 还原。
    terser: {
      enable: true,
      config: {
        // 保留 console，方便 dev 阶段查看日志
        compress: {
          drop_debugger: true,
          pure_funcs: [],
        },
      },
    },
    // source map 外置为独立文件，不打入小程序包内，
    // 既能在本地开发者工具中调试，又不占用包体积
    enableSourceMap: true,
    sourceMapType: 'cheap-module-source-map',
  },
  h5: {},
} satisfies UserConfigExport<'webpack5'>;
