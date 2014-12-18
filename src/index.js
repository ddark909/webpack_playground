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
require('./index.css');
require('./header.css');
if (NODE_ENV === 'production'){
    $('body').html('There is Production mode');
} else {
    $('body').html('There is Development mode');
}
