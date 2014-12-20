/**
 * Created by XX on 18.12.2014.
 */
var $ = require('jquery');
var customer = require('./customer.json');
var Header = require('./header.hbs');
require('./header.css');
$('body').prepend(Header(customer));
console.log('rrrr');
