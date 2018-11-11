var path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/js/index.js'
    ],
    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: '/build/',
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            }
        ]
    }
}