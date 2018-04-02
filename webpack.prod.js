//生产环境
const merge=require('webpack-merge')
const base=require('./webpack.base')
const webpack=require('webpack')
////提取CSS和vue内CSS,所有的.css文件和vue内的style都会以style标签的形式被添加到页面的head里面，不利于资源的缓存而且降低了页面的加载速度
const ExtractTextPlugin=require('extract-text-webpack-plugin')
//压缩JS
const UglifyJsPlugin=require('uglifyjs-webpack-plugin')
module.exports=merge(base,{
  module:{
    rules:[
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
    ]
  },
  plugins:[
    //压缩JS文件
    new UglifyJsPlugin({
      exclude:/node_modules/,
      uglifyOptions:{
        compress:{
          drop_console:true  //去除console.log
        }
      }
    }),
    //CSS提取，不以style形式注入index.html文件中
    new ExtractTextPlugin({
      filename:'styles/[name].css'
    })
  ]
})