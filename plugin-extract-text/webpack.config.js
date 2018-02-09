const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		home: path.resolve(__dirname, 'index.js'),
		precios: path.resolve(__dirname, 'precios.js'),
		contacto: path.resolve(__dirname, 'contacto.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			//Loaders
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					//['style-loader','css-loader']
					//fallback: "style-loader",
					use: "css-loader"
				})//loader para el archivo
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("css/[name].css")
	]
}
