const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
  entry: './src/index.js', // 入口文件路径
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.resolve(__dirname, 'dist'), // 输出目录
  },
  devServer: {
    static: './dist', // 指定静态资源的目录
    open: true // 自动打开浏览器页面
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html'
    })  
  ]
};