//生产环境
const merge=require('webpack-merge')
const base=require('./webpack.base')
const webpack=require('webpack')
////提取CSS和vue内CSS,所有的.css文件和vue内的style都会以style标签的形式被添加到页面的head里面，不利于资源的缓存而且降低了页面的加载速度
const ExtractTextPlugin=require('extract-text-webpack-plugin')
//压缩JS
const UglifyJsPlugin=require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports=merge(base,{
  module:{
    rules:[
      {
        test:/\.vue$/,
        loader:'vue-loader',  //将.vue文件中的script template style标签提取出来，交由相对应的loader去处理  
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
        test:/\.css$/,
        use:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:['css-loader']
        })
      }
    ]
  },
  plugins:[
    //压缩JS文件
    new UglifyJsPlugin({
      exclude:/node_modules/,
      uglifyOptions:{
        compress:{
          drop_console:true  //去除console.log
        },
        output:{
          beautify:false,
          comments:false
        }
      }
    }),
    //CSS提取，不以style形式注入index.html文件中
    new ExtractTextPlugin({
      filename:'styles/[name].[chunkhash:8].css'
    }),
    new HtmlWebpackPlugin({
      template:'./index.html',
      minify:{
        collapseWhitespace:true, //删除空白行和换行
        removeComments:true, //去除注释
        minifyJS:true //去除注释的script标签
      },
      hash:true //在script和link里注入hash值，主要为清除缓存
    })
  ]
})