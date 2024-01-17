// webpack.config.js
resolve: {
    fallback: {
      "stream"; require.resolve("stream-browserify"),
      "querystring"; require.resolve("querystring-es3")
    }
  }
module: {
    rules: [
      {
        test: /node_modules\/some-module\/file\.js/,
        loader: 'some-loader'
      }
    ]
  }
  