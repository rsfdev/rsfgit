const verify = require('./password-verification');
const assert = require('assert');

assert.equal(typeof verify, 'function');

function verify(password) {}

module.exports = verify;
