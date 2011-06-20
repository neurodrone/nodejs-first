var exec = require("child_process").exec;
function start() {
    console.log("Request handler 'Start' was called.");
    var content = "Empty";

    exec("ls -lah", function(error, stdout, stderr) {
        content = stdout;
    });
    return content;
}

function upload() {
    console.log("Request handler 'Upload' was called.");    
    return "Hello Upload."
}

exports.start = start;
exports.upload = upload;
