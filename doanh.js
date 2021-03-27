var http = require('http');

var fs = require('fs');
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});

    var url = req.url;
    if (url == '/'){

        fs.readFile('dangki.html',function (error,data){

            if (!error){
                res.write(data);
                res.end();
            }else {
                res.end('404 not found');
            }
        });
    }

}).listen(process.env.port||3000);
