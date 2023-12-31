const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const packageName = require('../package.json').name;

module.exports = {
  entry: path.join(__dirname, '../src/app/index.tsx'),
  // 输出
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/public/',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    libraryTarget: 'umd',
    library: `${packageName}-[name]`,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      src: path.join(__dirname, '../src'),
      react: path.join(__dirname, "../node_modules/react"),
      Mocks: path.join(__dirname, '../Mocks'),
      "react-dom": path.join(__dirname, "../node_modules/react-dom"),
      "react-router-dom": path.join(__dirname, "../node_modules/react-router-dom"),
      "antd": path.join(__dirname, "../node_modules/antd"),
    },
  },
  // 模式
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].css`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js|ts|tsx$/,
        include: [
          path.resolve(__dirname, '../src'),
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, '../node_modules/@ali/qa-ui'),
          path.resolve(__dirname, '../node_modules/@ali/qa-components'),
          path.resolve(__dirname, '../src/styles/antd.less'),
          path.resolve(__dirname, '../node_modules/antd/'),
          path.resolve(__dirname, '../src'),
        ],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[hash:base64]',
                namedExport: true,
                exportLocalsConvention: 'camelCaseOnly'
              },
            }
          },
          'postcss-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: "all",
      // 重复打包问题
      cacheGroups: {
        common: {
          // src下同步引入的模块，全部放到common.js中
          name: "common",
          test: /[\\/]src[\\/]/,
          minSize: 1,
          chunks: "initial",
          priority: 5
        },
        vendors: {
          // node_modules里的代码
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          name: 'vendors',
          priority: 10, // 优先级
          enforce: true,
        },
      },
    },
  }
}
