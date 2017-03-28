import 'ts-helpers';

import * as path from 'path';
import * as webpack from 'webpack';

/* tslint:disable:no-var-requires variable-name */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// const WriteFilePlugin = require('write-file-webpack-plugin');
/* tslint:enable:no-var-requires variable-name */

const dt = new Date();
const hash = '' + (dt.getFullYear() + (dt.getMonth() + 1) + dt.getDate() + dt.getHours() + dt.getMinutes());
const rootDir = path.resolve();
const distDir = path.join(rootDir, 'dist');

// ============================================================================

let webpackConfig: webpack.Configuration = {
  devtool: 'cheap-module-source-map',
  context: path.join(rootDir, 'src'),
  entry: {
    main: [ './main.ts' ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
    modules: [ 'node_modules', 'src' ],
    alias: {
      src: path.resolve('./src'),
    },
  },
  // devtool: 'eval', // set devtool to 'eval' to disable source maps and shave a few seconds off the build
  output: {
    path: path.join(rootDir, 'dist'),
    pathinfo: true,
    filename: '[name].js',
  },
  // disabling most of the stats as follows shaves a few seconds off the build
  stats: {
    assets: false, // Add asset Information
    assetsSort: 'field', // Sort assets by a field
    cached: false, // Add information about cached (not built) modules
    children: false, // Add children information
    chunks: false, // Add chunk information (setting this to `false` allows for a less verbose output)
    chunkModules: false, // Add built modules information to chunk information
    chunkOrigins: false, // Add the origins of chunks and chunk merging info
    chunksSort: 'field', // Sort the chunks by a field
    context: '../src/', // Context directory for request shortening
    errors: true, // Add errors
    errorDetails: true, // Add details to errors (like resolving log)
    hash: false, // Add the hash of the compilation
    modules: false, // Add built modules information
    modulesSort: 'field', // Sort the modules by a field
    publicPath: false, // Add public path information
    reasons: false, // Add information about the reasons why modules are included
    source: false, // Add the source code of modules
    timings: false, // Add timing information
    version: true, // Add webpack version information
    warnings: true, // Add warnings
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        use: [ 'tslint-loader' ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.ts$/,
        use: [ 'awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader' ],
      },
      {
        test: /\.json$/,
        use: [ 'json-loader' ],
      },
      {
        test: /\.js$/,
        use: [ 'imports-loader?define=>false', 'ng-annotate-loader' ],
      },
      {
        test: /\.html$/,
        use: [ 'raw-loader' ],
      },
      // other
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: [ 'file-loader?name=[name].[hash].[ext]' ],
      },
      {
        test: /\.css$/,
        use: [ 'to-string-loader', 'css-loader' ],
      },
      {
        test: /\.scss$/,
        use: [ 'to-string-loader', 'css-loader', 'sass-loader' ],
      },
      {
        test: /\.less$/,
        use: [ 'to-string-loader', 'css-loader?-url', 'less-loader' ],
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin(
      [
        { from: '/*.ico', to: distDir }, // copy icons
        { from: 'content/**/*', to: distDir }, // copy content
        { from: 'app/docs/search/search-worker.js', to: path.join(distDir, 'search') }, // copy search worker
        { context: path.join(rootDir, 'src/assets'), from: '**/*', to: distDir }, // copy assets
      ],
      {
        debug: 'warning', // set to 'info' to for copy debug output
        ignore: [], // set any files to ignore here
      },
    ),

    new HtmlWebpackPlugin({
      template: path.join(rootDir, 'src/index.html'),
      hash: true, // cache bust automatically added entry scripts
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      },
      templateParams: {
        cacheBust: '?v=' + hash, // using this for cache busting
      },
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/, [ /moment$/ ]), // saves ~100k from build

    new webpack.optimize.AggressiveMergingPlugin({}),

    // https://github.com/angular/angular/issues/11580
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.join(rootDir, 'src'),
    ),

    new webpack.LoaderOptionsPlugin({
      options: {
        /**
         * Static analysis linter for TypeScript advanced options configuration
         * Description: An extensible linter for the TypeScript language.
         *
         * See: https://github.com/wbuchwalter/tslint-loader
         */
        tslint: {
          emitErrors: true,
          failOnHint: false,
        },
      },
    }),

    // Enable compression of bundles
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],

  devServer: {
    contentBase: path.join(rootDir, 'dist'),
    filename: 'main.js',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
    publicPath: '/',
    stats: { colors: true },
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: true,
  },
};

// ============================================================================

let progressBarPlugin = true;
let releaseBuild = false;
let buildConfig = 'build-config.debug.json';
let devServer = false;

for (let arg of process.argv) {
  if (arg.includes('webpack-dev-server')) {
    // webpack-dev-server has been run
    devServer = true;
    // webpackConfig.plugins.push(new WriteFilePlugin()); // enable this to force webpack-dev-server to output files to /dist
    console.log('Webpack-dev-server running');
  } else if (arg === '--progress') {
    // disable the progress bar plugin if user has asked for --progress
    progressBarPlugin = false;
  } else if (arg.includes('--env')) {
    // environment variable has been specified
    if (
      arg === '--env.debug' ||
      arg === '--env.release') {
    } else {
      // invalid environment variable
      throw 'Invalid --env parameter';
    }
  }

  if (arg.includes('--env.release')) {
    releaseBuild = true;
    buildConfig = 'build-config.release.json';
  } else {
  }
}

console.log('Using build-config alias ' + buildConfig);
(webpackConfig.resolve.alias as any)['build-config'] = path.join(rootDir, buildConfig);

if (releaseBuild) {
  // production build
  console.log('Production build');

  // add production plugins
  console.log('Adding production build plugins');

  webpackConfig.plugins = webpackConfig.plugins.concat(
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') } ),

    new webpack.LoaderOptionsPlugin({
      // https://medium.com/modus-create-front-end-development/webpack-2-tree-shaking-configuration-9f1de90f3233
      minimize: true,
      debug: false,
    }),

    new webpack.optimize.UglifyJsPlugin(),
  );
} else {
  // development build
  console.log('Development build');
}

if (progressBarPlugin) {
  console.log('Default progress bar');
  webpackConfig.plugins.push(new ProgressBarPlugin({ clear: false }));
}

if (!devServer) {
  console.log('Cleaning dist folder');
  webpackConfig.plugins.push(new CleanWebpackPlugin([ 'dist' ]));
}

// ============================================================================

module.exports = (env: any) => {
  console.log(env);
};

module.exports = webpackConfig;
