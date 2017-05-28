import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

// const GLOBALS = {
//   'process.env.NODE_ENV': JSON.stringify('production')
// };

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'webpack-hot-middleware/client?reload=true', // note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  target: 'web', // node to bundle for node
  output: {
    path: path.join(__dirname, '/dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src',
    stats: {
      hash: false,
      version: false,
      timings: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: false,
      errorDetails: false,
      warnings: false,
      publicPath: false
    }
  },
  // externals: {
  //   react: 'React'
  // },
  postcss: {},
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('style.css')
  ],
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, include: path.join(__dirname, 'src'), loader: 'babel' },
      { test: /(\.css)$/, loaders: ['style', 'css'] },
      { test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style-loader', 'css!postcss-loader!less') },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      // { test: /\.(html|json)$/, exclude: /node_modules/, loader: 'raw'},
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
// { test: /\.svg$/, loader: 'babel?presets[]=es2015,presets[]=react!svg-react', include: path.join(__dirname, 'src/images') },
      { test: /\.(jpg|png)$/, loader: 'file', include: path.join(__dirname, 'src/images') },
      // { test: /\.svg$/, exclude: /node_modules/, loader: 'file?name=[path][name].[ext]' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.json', '.html', '.less', '.svg']
  }
};
