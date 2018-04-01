## Webpack手动搭建Vue项目

    1. 启动 npm start;
    2. 打包编译 webpack;

## 设置babel(Error: Couldn't find preset "es2015",是无法编译es6语法)---解决方案

    1. webpack.config.js不需要改动;
    2. 安装babel-preset-stage-2;
    3. 创建.babelrc文件,添加{"presets":["stage-2"]}

## 模块热替换碰到的问题

   >1.当设置webpack-dev-server时，在package.json-->script中已经设置了--hot，那么不需要在webpack.config.js中设置new webpack.HotModuleReplacementPlugin();

   >2.extract-text-webpack-plugin(提取CSS)不能与其一起使用，会导致css文件变更，但页面不刷新;

## 现在需要解决的问题

    1.将生产环境和开发环境分开;

