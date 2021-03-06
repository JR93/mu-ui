const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const cwd = process.cwd()
const babelConfig = require('../config/babel.config')

module.exports = mode => ({
  mode,
  context: cwd,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        options: {
          // configFile: path.resolve(__dirname, '../.eslintrc'),
          failOnError: mode === 'production',
          formatter: require('eslint-friendly-formatter')
        },
        include: path.resolve(cwd),
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { ...babelConfig },
        exclude: file => /node_modules/.test(file) && !/\.vue/.test(file)
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: mode === 'production'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: mode === 'production',
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, '../config/postcss.config.js')
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: ['.js', '.vue'],
    modules: ['node_modules']
  }
})
