const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const ElementUIUsagePlugin = require('./ElementUIUsagePlugin/index');

const useAnalyzer = process.env.use_analyzer
const {
  IS_PRODUCTION,
  IS_TEST,
  USE_CDN
} = require('./webpack.config')

// 由于公有 cdn 不稳定，这里提供 cdn 的配置项但是用 DllPlugin 做替代
const cdn = [
  'https://unpkg.com/vue@2.6.9/dist/vue.min.js',
  'https://unpkg.com/vue-router@3.0.2/dist/vue-router.min.js',
  'https://unpkg.com/vuex@3.1.0/dist/vuex.min.js',
  'https://unpkg.com/element-ui@2.6.1/lib/index.js',
  'https://unpkg.com/axios@0.18.0/dist/axios.min.js',
  'https://unpkg.com/js-cookie@2.2.0/src/js.cookie.js'
]

const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  'element-ui': 'ELEMENT',
  axios: 'axios',
  'js-cookie': 'Cookies'
}
const plugins = []
plugins.push(new HardSourceWebpackPlugin(), new ElementUIUsagePlugin({ regex: /<(el-[a-z-]+)/g }))

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    /**
     * 删除懒加载模块的 prefetch preload，降低带宽压力(使用在移动端)
     */
    // config.plugins.delete("prefetch").delete("preload");
    config.resolve.alias
      .set('@', path.join(__dirname, 'src/'))
      .set('util', path.join(__dirname, 'src/util'))
      .set('mixins', path.join(__dirname, 'src/mixins'))
    config.module.rule('svg').uses.clear()
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .include.add(path.join(__dirname, 'src/icons')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    // 修改images loader 添加svg处理
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .exclude.add(path.join(__dirname, 'src/icons'))
      .end()
    useAnalyzer && config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    if (IS_PRODUCTION) {
      if (USE_CDN) {
        config.plugin('html').tap(args => {
          args[0].cdn = cdn
          return args
        })
        config.externals(externals)
      }
      config.plugin('html').tap(args => {
        args[0].minify && (args[0].minify.minifyCSS = true) // 压缩 index.html 中的css
        return args
      })
      /** 注意：gzip需要nginx进行配合 */
      config
        .plugin('compression')
        .use(CompressionWebpackPlugin)
        .tap(() => [
          {
            test: /\.js$|\.html$|\.css/, // 匹配文件名
            threshold: 10240, // 超过10k进行压缩
            deleteOriginalAssets: false // 是否删除源文件
          }
        ])

      config.optimization.minimizer('terser').tap(args => {
        // 生产环境推荐关闭 sourcemap 防止源码泄漏
        // 服务端通过前端发送的行列，根据 sourcemap 转为源文件位置
        args[0].sourceMap = IS_TEST
        args[0].terserOptions.warnings = false
        args[0].terserOptions.compress.drop_console = true
        args[0].terserOptions.compress.drop_debugger = true
        return args
      })
    }
  },
  configureWebpack: {
    plugins
  },

  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        prependData: `
        @import '~@/style/mixin.scss';
        @import "~@/style/variables.scss";
        `
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    overlay: true,
    port: 8080
  }
}
