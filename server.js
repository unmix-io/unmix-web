var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use("/result/*", serveStatic(__dirname + "/dist/index.html")); // make sure all routes can be accessed
var port = process.env.PORT || 5000;
app.listen(port);

console.log('unmix-web server started on port: '+ port);