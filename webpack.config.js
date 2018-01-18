const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

// module.exports = {
//   // entry: {
//   //   main: './src/script/main.js',
//   //   a: './src/script/a.js',
//   //   b: './src/script/b.js',
//   //   c: './src/script/c.js'
//   // },
//   // output: {
//   //   path: path.resolve(__dirname, 'dist'),
//   //   filename: 'js/[name]-[chunkhash].js',
//   //   publicPath: 'http://cdn.com'
//   // },
//   plugins: [
//     new htmlWebpackPlugin({
//       template: 'index.html',
//       filename: 'index.html',
//       inject: 'head',
//       title: 'Webpack is good',
//       date: new Date(),
//       minify: {
//         removeComments: true
//         // collapseWhitespace: true
//       }
//     }),
//     new htmlWebpackPlugin({
//       template: 'index.html',
//       filename: 'a.html',
//       inject: 'head',
//       title: 'It is a',
//       date: new Date(),
//       minify: {
//         removeComments: true
//         // collapseWhitespace: true
//       },
//       // chunks: ['main', 'a'],
//       excludeChunks: ['b', 'c']// 排除chunks
//     }),
//     new htmlWebpackPlugin({
//       template: 'index.html',
//       filename: 'b.html',
//       inject: 'head',
//       title: 'It is b',
//       date: new Date(),
//       minify: {
//         removeComments: true
//         // collapseWhitespace: true
//       },
//       chunks: ['b']
//     }),
//     new htmlWebpackPlugin({
//       template: 'index.html',
//       filename: 'c.html',
//       inject: 'head',
//       title: 'It is c',
//       date: new Date(),
//       minify: {
//         removeComments: true
//         // collapseWhitespace: true
//       },
//       chunks: ['c']
//     })
//   ]
// }
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bound.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
        // query:{
        //   presets:['lastest']
        // }//写在package.json中
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?importantLoader=1!postcss-loader'

      }
    ]
  },
  postcss:{
    require('autoprefixer')({
      broswers:['Last 5 versions']
    })
  }
}
