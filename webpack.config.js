/**
 * Created by XX on 21.12.2014.
 */
/**
 * Created by XX on 17.12.2014.
 */
var path = require('path');
var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');

var config = {
    context: path.join(__dirname, 'src'),
    entry: './index',
    output: {
        path: path.join(__dirname, 'assets')
    },
    resolve: {
        extensions: ['', '.js', 'jsx']
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.hbs$/, loader: 'handlebars-loader'},
            {test: /\.jsx$/, loader: 'jsx-loader'},
            {
                test: /\.(eot|woff|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            }
        ]
    },
    plugins: [
    /**new webpack.optimize.UglifyJsPlugin,**/
        new webpack.optimize.DedupePlugin,
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify('production')
        }),
        new BowerWebpackPlugin({
            modulesDirectories: ['bower_components'],
            manifestFiles: ['bower.json', '.bower.json'],
            includes: /.*/,
            excludes: /.\.less$/
        })
    ]
};
/*var compiler = webpack(config);
compiler.run(function(err, stats){
    console.log(stats.toJson())
});*/
