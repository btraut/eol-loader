/*jslint node:true */
"use strict";

var EOL = require('os').EOL;

module.exports = function(content) {
    // Replace the newlines.
    content = content.replace(/\r?\n/g, EOL);
    
    // Add newline at the end of file.
    if (new RegExp(EOL + '$').test(content)) {
        content += EOL;
    }
    
    this.callback(null, content);
}
