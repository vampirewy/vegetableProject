const path=require('path')
const webpack=require('webpack')
//生成index.html
const HtmlWebpackPlugin=require('html-webpack-plugin')
//压缩js
const UglifyJsPlugin=require('uglifyjs-webpack-plugin')
//提取CSS和vue内CSS,所有的.css文件和vue内的style都会以style标签的形式被添加到页面的head里面，不利于资源的缓存而且降低了页面的加载速度
const ExtractTextPlugin=require('extract-text-webpack-plugin')
module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'js/[name].js'
  },
  resolve:{
    //require文件时,自动带上后缀去访问文件是否存在 
    extensions:['.js','.vue','.json'],
    alias:{
      //正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        //cacheDirectory用于缓存babel编译结果，加速重新编译速度
        use:['babel-loader?cacheDirectory'],
        exclude:/node_modules/
      },
      {
        test:/\.vue$/,
        loader:'vue-loader',
       options:{
         loaders:{
           css:ExtractTextPlugin.extract({
             use:'css-loader',
             fallback:'vue-style-loader'
           }),
           'less':ExtractTextPlugin.extract({
             use:['css-loader','less-loader'],
             fallback:'vue-style-loader'
           })
         }
       }
      },
      {
        test:/\.less$/,
        // loader:'vue-style-loader!css-loader!less-loader',
        use:ExtractTextPlugin.extract({
          fallback:'vue-style-loader',
          use:['css-loader','less-loader']
        })
      },
      {
        test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader:'url-loader' ,
        options:{
          limit:10000,
          //输出文件名
          name:'img/[name].[ext].[hash:8]'
        }
      },
      {
        test:/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader:'url-loader',
        options:{
          limit:10000,
          //输出文件名
          name:'audio/[name].[ext].[hash:8]'
        }
      },
      {
        test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader:'url-loader',
        options:{
          limit:10000,
          //输出文件名
          name:'fonts/[name].[ext].[hash:8]'
        }
      }
    ]
  },
  devtool:'inline-source-map',
  //webpack-dev-server(自动刷新及热更新)
  devServer:{
    //在端口号为222建立本地服务,
    // contentBase:'./src',
    /**首先devServer的publicPath路径是指向内存生产的路径，不在物理硬盘上，所以我的index.html里面引用的js路径，应该相对于publicPath地址。
    注意：publicPath地址默认不写会读取output的publicPath路径，publicPath总是以‘/’开头。**/
    // publicPath:'./dist',
    port:2222,
    open:true,
    hot:true,
    host:'localhost',
    historyApiFallback:true,
    inline:true,
    progress:true,
    proxy:{},
    headers:{}
  },
  plugins:[
    //自动刷新,这里配置了模块热替换后，package.json script里start里不需要设置--hot，不然报错和整页刷新;反之设置了--hot，这里就不需要设置了
    new webpack.HotModuleReplacementPlugin(),
    //动态生成index.html,script标签
    new HtmlWebpackPlugin({
      template:'./index.html'
    }),
    //压缩JS文件
    // new UglifyJsPlugin(),
    //提取CSS,与JS文件分离
    new  ExtractTextPlugin('styles/index.css')
  ]
}