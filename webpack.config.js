const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV ? process.env.NODE_ENV: 'development',
    entry: path.resolve(__dirname, 'app')+"/index.js",
    output: {
        path: path.resolve(__dirname),
        filename: 'scli.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    node: {
        fs: 'empty',
        child_process: 'empty',
    },
    devServer: {
        contentBase: path.join(__dirname, 'app'),
        compress: true,
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i,
            uglifyOptions: {
                warnings: false,
                parse: {},
                compress: {},
                mangle: true, // Note `mangle.properties` is `false` by default.
                output: null,
                toplevel: false,
                nameCache: null,
                ie8: false,
                keep_fnames: false,
            },
            sourceMap: true
        })]
    }
};