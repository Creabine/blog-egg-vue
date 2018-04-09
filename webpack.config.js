// 这里的 webpack.config.js 不是 Webpack 原生的配置文件, 这是专门给 easywebpack-cli
// 使用的配置文件. 这份配置简化了 Webpack 原生配置, 隐藏众多基础，loader, plugin 等
// 细节, 只提供5个左右的基本配置项, 其中 loader, plugin 通过开关开启就可以使用其功
// 能.在构建时, easywebpack-cli 最终会这份简化的配置转换为 Webpack 原生配置.

'use strict';
const path = require('path');
module.exports = {
  // 使用 Egg 框架进行 Server Side Render
  egg: true,
  // 使用vue框架
  framework: 'vue',
  // Webpack 构建入口文件配置
  entry: {
    include: ['app/web/page'],
    exclude: ['app/web/page/[a-z]+/component', 'app/web/page/test'],
    loader: {
      client: 'app/web/framework/vue/entry/client-loader.js',
      server: 'app/web/framework/vue/entry/server-loader.js',
    }
  },
  // 别名，也就是 Webpack的 resolve.alias，无需写根目录
  alias: {
    server: 'app/web/framework/vue/entry/server.js',
    client: 'app/web/framework/vue/entry/client.js',
    app: 'app/web/framework/vue/app.js',
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    vue:'vue/dist/vue.esm.js'
  },
  // 提高构件速度
  dll: ['vue', 'axios'],
  // easywebpack 内置了很多常用的loader，所以这里不用写了
  loaders: {},
  // easywebpack内置了一些plugin
  plugins: {},
  // 编译完成回调方法
  done() {

  }
};
