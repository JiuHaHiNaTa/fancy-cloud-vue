const path = require('path');
const {
    merge
} = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = env => (merge(common(env), {
    mode: 'development',
    //开发工具 ， js映射
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/fancy/',
        compress: true,
        port: 9000,
        inline: true
    },
    plugins: [
        //依赖分析
        new BundleAnalyzerPlugin({
            analyzerHost: '127.0.0.1',
            //  将在“服务器”模式下使用的端口启动HTTP服务器。
            analyzerPort: 9080,
            openAnalyzer: false,
        })
    ]
}))