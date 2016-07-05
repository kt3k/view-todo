const {i} = require('dom-gen')

/**
 * @param {string} name The name of font awesome class
 * @return {jQuery}
 */
exports.fa = name => i().addClass('fa fa-' + name)
