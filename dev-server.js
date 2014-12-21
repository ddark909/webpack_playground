/**
 * Created by XX on 21.12.2014.
 */
var webpack = require('webpack');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var devServer = new WebpackDevServer(
    webpack(config),
    {
        contentBase: '/src/',
        publicPath: '/assets/'
    }
);
devServer.listen(8080, 'localhost', function() {});