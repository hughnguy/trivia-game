var express = require("express");
var path = require("path");

/* Setup express app */
var app = express();

/* Setup port */
var port = process.env.PORT || 8000;

/* Set static file location */
app.use(express.static("./public"));

/* Always return the main index.html, so react-router render the route in the client */
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

/* Listen */
app.listen(port);

console.log("App listening on port " + port);