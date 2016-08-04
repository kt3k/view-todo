const {i} = require('dom-gen')

/**
 * @param {string} name The name of font awesome class
 * @return {jQuery}
 */
exports.fa = name => i().addClass('fa fa-' + name)

/**
 * @param {number} dur The duration to wait
 * @return {Promise}
 */
exports.wait = dur => new Promise(resolve => setTimeout(resolve, dur))

/**
 * @param {number} s The saturation
 * @param {number} l The lightness
 */
exports.randomHsl = (s, l) => `hsl(${Math.floor(Math.random() * 360)},${s}%,${l}%)`
