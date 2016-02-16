/*jslint node:true */
"use strict";

var EOL = require('os').EOL;

function ChangeEOLCharLoader(content) {
    // Replace the newlines.
    content = content.replace(/\r?\n/g, EOL);
    
    // Add newline at the end of file.
    if (new RegExp(eol + '$').test(content)) {
        str += EOL;
    }
    
    this.callback(null, content);
}

module.exports = ChangeEOLCharLoader;
