module.exports = {
  context: __dirname,
  entry: "./demo/lib/demo.js",
  output: {
    path: "./",
    filename: "demo.js"
  },
    module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx' ]
  },
};