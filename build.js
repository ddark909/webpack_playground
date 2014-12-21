/**
 * Created by XX on 17.12.2014.
 */
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);

compiler.run(function(){
    //stay silent
});