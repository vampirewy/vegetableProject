## Webpack手动搭建Vue项目

    1. 开发环境npm run dev;
    2. 生产环境npm run prod;

## 设置babel(Error: Couldn't find preset "es2015",是无法编译es6语法)---解决方案

    1. webpack.config.js不需要改动;
    2. 安装babel-preset-env;
    3. 创建.babelrc文件;

## 模块热替换碰到的问题

   >1.当设置webpack-dev-server时，在package.json-->script中已经设置了--hot，那么不需要在webpack.config.js中设置new webpack.HotModuleReplacementPlugin();

   >2.extract-text-webpack-plugin(提取CSS)不能与其一起使用，会导致css文件变更，但页面不刷新;

## 已将生产环境和开发环境分开

## 添加babel-plugin-transform-runtime插件

>主要作用: 

> 减少冗余代码,Babel 转译后的代码要实现源代码同样的功能需要借助一些帮助函数;


http://imweb.io/topic/5a523cc0a192c3b460fce3a5