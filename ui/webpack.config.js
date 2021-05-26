module.export = {
  entry: './out/App.js',
  output: {
    path: `${__dirname}/public/js`,
    filename: 'app.js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
};
