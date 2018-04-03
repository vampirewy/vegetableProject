//开发环境
const merge=require('webpack-merge')
const base=require('./webpack.base')
const webpack=require('webpack')
module.exports=merge(base,{
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
    // host:'localhost',
    host:'192.168.1.108',
    historyApiFallback:true,
    inline:true,
    // progress:true,
    proxy:{},
    headers:{}
  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test:/\.less$/,
        loader:'vue-style-loader!css-loader!less-loader'
      },
      {
        test:/.\css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  plugins:[
    //自动刷新,这里配置了模块热替换后，package.json script里start里不需要设置--hot，不然报错和整页刷新;反之设置了--hot，这里就不需要设置了
    new webpack.HotModuleReplacementPlugin()
  ]
})