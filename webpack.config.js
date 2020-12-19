const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babelLoader = {
	loader: 'babel-loader',
	options: {
		babelrc: false,
		presets: [
			[
				'@babel/preset-env',
				{
					useBuiltIns: 'entry',
					corejs: { version: 3 },
					targets: '> 1%',
					debug: false,
				},
			],
			'@babel/preset-react',
		],
		plugins: ['@babel/syntax-dynamic-import'],
	},
};

module.exports = {
	entry: './src/App',
	mode: 'production',
	devtool: false,
	output: {
		path: path.join(__dirname, '/dist'),
		filename: '[name].[hash].js',
		chunkFilename: '[chunkhash].bundle.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				include: /src/,
				use: [
					babelLoader,
					{
						loader: 'ts-loader',
					},
				],
			},
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: { modules: true } },
					{ loader: 'sass-loader' },
				],
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/App.html',
			favicon: './src/assets/favicon.ico',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: './src/assets/img', to: './assets/img' },
			],
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
			chunkFilename: '[chunkhash].bundle.css',
		}),
	],
	devServer: {
		historyApiFallback: true,
	},
};
