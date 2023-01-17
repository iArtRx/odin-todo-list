const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
  },
  resolve: {
    modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'assets'),
        path.resolve(__dirname, 'js'),
    ]
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {

          test: /\.(png|svg|jpg|jpeg|gif)$/i,
  
          type: 'asset/resource',
  
        },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Todo List',
        filename: 'index.html',
        template: 'src/template.html'
    }),
  ]
};