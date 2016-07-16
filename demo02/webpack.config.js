var webpack = require('webpack');
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