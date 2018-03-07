/**
 * News FavicoNum
 *
 * @link      https://github.com/danopz/news_faviconum
 * @copyright Copyright (c) 2017-2018 Daniel Opitz
 * @license   https://github.com/danopz/news_faviconum/blob/master/LICENSE (MIT License)
 */
module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            { pattern: 'test-context.js', watched: false }
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'test-context.js': ['webpack']
        },
        webpack: {
            module: {
                loaders: [
                    { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        },
        // singleRun: true
    });
};