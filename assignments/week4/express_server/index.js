//bring in the express package
const express = require("express");

//run a copy of the express package.
const app = express();

//connectt our HTTP server with the Express web server module.
const http = require("http").Server(app);

//
const port = 3000; 

http.listen(port);

console.log("Express server is now running on" + port);

//tells express to load the files from the pubilc_html folder when someone requests / or nothing.
app.use("/",express.static("public_html/"));//static tell this is a deirectory and not to run it.