const path=require('path')
const webpack=require('webpack')
//生成index.html
const HtmlWebpackPlugin=require('html-webpack-plugin')
//清理dist文件夹
const CleanWebpackPlugin=require('clean-webpack-plugin')
module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'js/[name].[chunkhash:8].js'
  },
  resolve:{
    //require文件时,自动带上后缀去访问文件是否存在 
    extensions:['.js','.vue','.json'],
    alias:{
      //正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
      'vue$': 'vue/dist/vue.esm.js'
    },
    //告诉webpack去哪里找第三方下载的文件，提高速度
    modules:[path.resolve(__dirname,'node_modules')]
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        //cacheDirectory用于缓存babel编译结果，加速重新编译速度
        use:['babel-loader?cacheDirectory'],
        exclude:/node_modules/,
        include:path.resolve(__dirname,'src')
      },
      {
        test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader:'url-loader' ,
        options:{
          limit:10000,
          //输出文件名,带8位的hash
          name:'img/[name].[ext].[hash:8]'
        }
      },
      {
        test:/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader:'url-loader',
        options:{
          limit:10000,
           //输出文件名,带8位的hash
          name:'audio/[name].[ext].[hash:8]'
        }
      },
      {
        test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader:'url-loader',
        options:{
          limit:10000,
          //输出文件名,带8位的hash
          name:'fonts/[name].[ext].[hash:8]'
        }
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    //动态生成index.html,script标签
    new HtmlWebpackPlugin({
      template:'./index.html'
    })
  ]
}