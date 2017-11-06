const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new UglifyJSPlugin({
            mangle: true,
            comments: false
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    }
                }
            }
        ]
    },
    output: {
        filename: 'faviconum.js',
        path: path.resolve(__dirname, 'news_faviconum', 'js')
    }
};