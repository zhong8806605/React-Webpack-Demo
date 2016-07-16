var webpack = require('../node_modules/webpack');
module.exports = {
	entry:'./index.js',
	output:{
		path:'build',
		filename:'build.js'
	},
	module:{
		loaders:[
			{test:/\.js$/,loader:'jsx-loader'}
		]
	}
}