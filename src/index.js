/**
 * Created by XX on 17.12.2014.
 */
console.log('Hello, World');
console.log(__dirname);
if (NODE_ENV === 'production'){
    console.log('There is production mode');
} else {
    console.log('There is Development mode')
}
var $ = require('jquery');
var React = require('react');
var Toolbar = require('./toolbar.jsx');
require('./index.css');
require('./header.js');
React.render(
    React.createElement(Toolbar),
    document.getElementById('toolbar')
);
if (NODE_ENV === 'production'){
    $('body').append('There is Production mode');
} else {
    $('body').append('There is Development mode');
}

