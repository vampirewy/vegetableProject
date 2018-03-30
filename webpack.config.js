const path=require('path')
const webpack=require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const UglifyJsPlugin=require('uglifyjs-webpack-plugin')
module.exports={
  entry:'./src/main.js',
  output:{
    path:'@/dist',
    filename:'js/[name].js'
  },
  resolve:{
    //require文件时,去除文件后缀
    extensions:['.js','.vue','.json'],
    //正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
    alias:{
      'vue$': 'vue/dist/vue.esm.js',
      '@':path.resolve(__dirname)
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
        loader:'vue-style-loader!css-loader!less-loader'
      },
      {
        test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader:'url-loader' ,
        options:{
          limit:10000,
          name:'img/[name].[ext].[hash]'
        }
      },
      {
        test:/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader:'url-loader',
        options:{
          limit:10000,
          name:'audio/[name].[ext].[hash]'
        }
      },
      {
        test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader:'url-loader',
        options:{
          limit:10000,
          name:'fonts/[name].[ext].[hash]'
        }
      }
    ]
  },
  devtool:'inline-source-map',
  //webpack-dev-server(自动刷新及热更新)
  devServer:{
    //在端口号为1234建立本地服务,
    contentBase:'./dist',
    /**首先devServer的publicPath路径是指向内存生产的路径，不在物理硬盘上，所以我的index.html里面引用的js路径，应该相对于publicPath地址。
    注意：publicPath地址默认不写会读取output的publicPath路径，publicPath总是以‘/’开头。**/
    publicPath:'./dist',
    port:2222,
    open:true,
    hot:true,
    host:'localhost',
    historyApiFallback:true,
    inline:true,
    proxy:{}
  },
  plugins:[
    //自动刷新
    new webpack.HotModuleReplacementPlugin(),
    //动态生成index.html,script标签
    new HtmlWebpackPlugin({
      template:'./index.html'
    }),
    //压缩JS文件
    new UglifyJsPlugin()
  ]
}