/*jslint node:true */
"use strict";

var EOL = require('os').EOL;

function ChangeEOLCharLoader(content) {
    content = content.replace(/\r?\n/g, EOL);
    this.callback(null, content);
}

module.exports = ChangeEOLCharLoader;
