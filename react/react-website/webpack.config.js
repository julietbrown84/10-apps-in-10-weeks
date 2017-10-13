const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        {
        test: /\.js$/,
        exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env', 'react']
                }
            }
        },
        {
        test: /\.scss$/,
          loaders: ["style-loader", "css-loader", "sass-loader", ]
        }
    ]
 },
 plugins: [HtmlWebpackPluginConfig]
}
