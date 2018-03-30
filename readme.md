## Webpack手动搭建Vue项目

    1. 启动 npm start;
    2. 打包编译 webpack;

## 设置babel(Error: Couldn't find preset "es2015",是无法编译es6语法)---解决方案

    1. webpack.config.js不需要改动;
    2. 安装babel-preset-stage-2;
    3. 创建.babelrc文件,添加{"presets":["stage-2"]}

## 现在需要解决的问题

    1. 当webpack-dev-server跑起来的时候,文件自动编译,
    现在是先需要编译，再跑起来;
    2. 将生产环境和开发环境分开;
    3. 提取CSS

