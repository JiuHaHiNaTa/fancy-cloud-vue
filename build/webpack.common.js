const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/dist/plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => ({
	entry: './src/index.js',
	output: {
		//配置输出文件名
		filename: './js/[name].[fullhash].js',
		//配置输出路径
		path: path.resolve(__dirname, '/dist'),
		/*
		 * chunkFilename用来打包require.ensure方法中引入的模块,如果该方法中没有引入任何模块则不会生成任何chunk块文件
		 * 比如在main.js文件中,require.ensure([],function(require){alert(11);}),这样不会打包块文件
		 * 只有这样才会打包生成块文件require.ensure([],function(require){alert(11);require('./greeter')})
		 * 或者这样require.ensure(['./greeter'],function(require){alert(11);})
		 * chunk的hash值只有在require.ensure中引入的模块发生变化,hash值才会改变
		 * 注意:对于不是在ensure方法中引入的模块,此属性不会生效,只能用CommonsChunkPlugin插件来提取
		 * */
		chunkFilename: './js/[name].[chunkhash].js',
		publicPath: '/fancy/'
	},
	resolve: {
        alias: {
            vue$: 'vue/dist/vue.runtime.esm-browser.js'
        }
    },
	module: {
		rules: [{
				test: /\.vue$/,
				use: [
					'vue-loader'
				]
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					//vue-style-loader和stye-loader使用一个
					'vue-style-loader',
					'css-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			},
			{
				test: /\.(jpg|png|jpeg|gif|bmp)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 1024,
						fallback: {
							loader: 'file-loader',
							options: {
								name: '[name].[ext]'
							}
						}
					}
				}
			},
			{
				test: /\.(mp4|ogg|mp3|wav)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 1024,
						fallback: {
							loader: 'file-loader',
							options: {
								name: '[name].[ext]'
							}
						}
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
			title: 'Vue'
		}),
		new CleanWebpackPlugin(),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
            filename: env === 'dev' ? '[name].css' : 'css/[name]-[contenthash:7].css',
            chunkFilename: env === 'dev' ? '[name].css' : 'css/[name]-[id][contenthash:7].css'
        })
	]
})