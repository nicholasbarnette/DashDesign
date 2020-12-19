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
    entry: './src/index',
	output: {
		library: 'index',
		libraryTarget: 'umd',
		path: path.join(__dirname, '/dist'),
		filename: 'index.js',
	},
    mode: 'production',
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
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { modules: false, sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
				  {
					loader: 'file-loader',
				  },
				],
			  },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			favicon: './src/assets/img/favicon.ico',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
        }),
		new CopyWebpackPlugin({
			patterns: [
				{ from: './src/assets/img', to: './assets/img' },
			],
		}),
	],
	performance: {
		maxEntrypointSize: 700000,
		maxAssetSize: 700000
	},
	devServer: {
		historyApiFallback: true,
	},
};