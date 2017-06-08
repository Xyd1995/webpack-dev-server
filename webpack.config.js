const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
	
module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: 'build.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: '/node_modules',
				use: [{loader:'babel-loader'}]
			}
		]
	},
	devServer: {
		inline: true
	},
  	plugins: [
    	new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  	]
}
