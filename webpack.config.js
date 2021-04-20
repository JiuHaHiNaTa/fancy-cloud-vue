const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
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
					'style-loader',
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
			template: './src/index.html',
			filename: 'index.html',
			title: 'Vue'
		}),
		new CleanWebpackPlugin(),
	],
	devServer: {
		port: 3000,
		hot: true,
		open: true,
		contentBase: '../dist'
	}
}