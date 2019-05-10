const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'main.js'), // arquivo principal
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        port:9000,
        index: 'index.html'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}