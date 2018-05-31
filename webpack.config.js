const webpack=require('webpack');
const path=require('path');
//因为webpack版本已更新到4.xxx,所以这个插件也要更新到最新的 npm i extract-text-webpack-plugin@next即可
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
// const UglifyjsPlugin=require('uglifyjs-webpack-plugin');
const UglifyPlugin=require('webpack-parallel-uglify-plugin');
const CleanPlugin=require('clean-webpack-plugin');
module.exports={
  // entry:'./www/js/main.js',
  entry:{
    // vendor:'./www/lib/ionic/js/ionic.bundle.min.js',
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
        use:ExtractTextPlugin.extract(['style-loader','css-loader'])
      },
      {
        test:/\.less$/,
        use:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:[
            {
            loader:'css-loader',
            options:{
              minimize: true
            }
          },
          {
            loader:'less-loader'
          }
        ]
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
          limit:10000,
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
      template:'./www/index.html',
      minify:{
        collapseWhitespace:true, //删除空白行和换行
        removeComments:true, //去除注释
        minifyJS:true //去除注释的script标签
      },
      hash:true //在script和link里注入hash值，主要为清除缓存
    }),
    // new UglifyPlugin({
    //   uglifyJS:{
    //     output: {
    //       comments: false
    //     },
    //     compress: {
    //       warnings: false
    //     }
    //   }
    // }),
    new CleanPlugin(['dist'])
  ],
  // devtool:'inline-source-map',
  devServer:{
    contentBase:path.resolve(__dirname,'dist'),
    // publicPath:'./dist',
    port:2222,
    open:true,
    hot:true,
    host:'localhost',
    historyApiFallback:true,
    inline:true,
    // progress:true,
    proxy:{},
    headers:{}
  },
}
