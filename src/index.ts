const Mnemonic = require('bitcore-mnemonic')
const code = new Mnemonic(256, Mnemonic.Words.ENGLISH);
console.log(code.toString())
