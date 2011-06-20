var exec = require("child_process").exec;
function start(response) {
    console.log("Request handler 'Start' was called.");
    var content = "Empty";

    exec("ls -lah", function(error, stdout, stderr) {
        response.writeHead(200, { "Content-type": "text/html" });
        response.write(stdout);
        response.end();
    });
}

function upload(response) {
    console.log("Request handler 'Upload' was called.");    
    response.writeHead(200, { "Content-type": "text/html" });
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;
