const webpack=require('webpack');
const path=require('path');
//因为webpack版本已更新到4.xxx,所以这个插件也要更新到最新的 npm i extract-text-webpack-plugin@next即可
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
  // entry:'./www/js/main.js',
  entry:{
    vendor:'./www/lib/ionic/js/ionic.bundle.min.js',
    app:'./www/js/main.js'
  },
  output:{
    //默认放到dist文件夹下
    // path:path.resolve(__dirname,'dist'),
    filename:'js/[name].[hash:8].js',
    chunkFilename:'js/[name].[chunkhash].js' //按需要加载所需(分割成一个一个小文件)
  },
  resolve:{
    extensions:['.js','.json','.less']
  },
  module:{
    rules:[
      {
        test:/\.html$/,
        loader:'raw-loader',//模板转字符串
      },
      {
        test:/\.css$/,
        use:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:['css-loader']
        })
      },
      {
        test:/\.less$/,
        use:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:['css-loader','less-loader']
        })
      },
      {
        test:/\.svg$/,
        use:'file-loader',
        // name:'img/[name].[ext].[hash:8]'
      },
      {
        test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader:'url-loader',
        // options:{
        //   limit:10000,
        //   name:'fonts/[name].[ext].[hash:8]'
        // }
      },
      {
        test:/\.(png|jpe?g|gif|jpg)(\?.*)?$/,
        loader:'url-loader',
        options:{
          limit:1000,
          name:'img/[name].[ext].[hash:8]'
        }
      }
    ]
  },
  plugins:[
    new ExtractTextPlugin({
      filename:'styles/[name].[chunkhash:8].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template:'./www/index.html'
    })
    //别使用，样式会出问题
    //只加载用到的class样式
    // new PurifyCSSPlugin({
    //   paths:glob.sync(path.join(__dirname,'./www/*.html'))
    // })
  ],
  devtool:'inline-source-map',
  //webpack-dev-server(自动刷新及热更新)
  devServer:{
    //在端口号为222建立本地服务,
    contentBase:path.resolve(__dirname,'dist'),
    /**首先devServer的publicPath路径是指向内存生产的路径，不在物理硬盘上，所以我的index.html里面引用的js路径，应该相对于publicPath地址。
    注意：publicPath地址默认不写会读取output的publicPath路径，publicPath总是以‘/’开头。**/
    // publicPath:'./dist',
    port:2222,
    open:true,
    hot:true,
    host:'localhost',
    // host:'192.168.1.108',
    historyApiFallback:true,
    inline:true,
    // progress:true,
    proxy:{},
    headers:{}
  },
}
