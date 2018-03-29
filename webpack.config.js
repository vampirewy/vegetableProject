const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].js'
  },
  resolve:{
    extensions:['.js','.vue','.json'],
    alias:{
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:/node_modules/
      },
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test:/\.less$/,
        loader:'style-loader!css-loader!less-loader'
      }
    ]
  },
  devServer:{
    contentBase:'./',
    publicPath:'/',
    port:1234,
    open:true,
    hot:true,
    host:'localhost',
    historyApiFallback:true,
    inline:true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
}