const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BannerPlugin = require('webpack').BannerPlugin;
const pkg = require(path.resolve(__dirname, 'package.json'));

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new UglifyJSPlugin({
            mangle: true,
            comments: false
        }),
        new BannerPlugin({
            banner: `News FavicoNum\n@link ${pkg.homepage}\n@copyright 2017-2018 ${pkg.author}\n@license ${pkg.license}`
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