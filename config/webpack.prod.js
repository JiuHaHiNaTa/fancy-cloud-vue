const webpack = require('webpack');
const {
    merge
} = require('webpack-merge');
const common = require('./webpack.common.js');

//压缩打包工具，UglifyJs替代品
const TerserPlugin = require('terser-webpack-plugin');

module.exports = env => (merge(common(env), {
    mode: 'production',
    // devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [
    ]
}))