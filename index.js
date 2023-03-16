'use strict'; //all of the code must follow the JS lines strictly

var moment = require('moment');// = import moment from 'moment'

/**
 * Returns a string element with a footer and updating year
 * @param {string} name //@ the function is going to expect a parameter (string name)
 * @return {string}// output of the function
 */
exports.footer = function (name) {// exports is an object for export packages
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};