const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const root = path.resolve(process.cwd());
const env = process.env.NODE_ENV;

module.exports = {
  mode: env,
  entry: './src/index.ts',
  output: {
    filename: 'index.[hash].js',
    path: path.resolve(root, 'dist'),
    publicPath: env == 'production' ? './' : '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
    open: true,
    host: 'localhost',
  }
}
