module.exports = {  
  entry: './main.ts',
  output: {
    filename: './bundle.js'
  },
  module: {
    loaders: [
      { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' }
    ]
  }
}