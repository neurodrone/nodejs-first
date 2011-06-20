function start() {
    console.log("Request handler 'Start' was called.");

    function sleep(milliseconds) {
        var starttime = new Date().getTime();
        while (new Date().getTime() < starttime + milliseconds);
    }
    
    sleep(10000);
    return "Hello Start."
}

function upload() {
    console.log("Request handler 'Upload' was called.");    
    return "Hello Upload."
}

exports.start = start;
exports.upload = upload;
