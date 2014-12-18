/**
 * Created by XX on 18.12.2014.
 */
var $ = require('jquery');
var customer = require('./customer.json');
require('./header.css');
$('body').prepend(Header(customer));
