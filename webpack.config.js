const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV ? process.env.NODE_ENV: 'development',
    entry: path.resolve(__dirname, 'app')+"/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'app.bundle.js',
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
    optimization: {
        minimizer: [new UglifyJsPlugin({
            sourceMap: true
        })]
    }
};