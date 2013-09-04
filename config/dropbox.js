var Dropbox = require("Dropbox")

module.exports = function() {
	var client = new Dropbox.Client({
		key: "x5zx3wv6mdnaqit", //process.env.DROPBOX_KEY,
		secret: "1r71sa414vg2mvq" //process.env.DROPBOX_SECRET
	});
	client.authDriver(new Dropbox.AuthDriver.NodeServer(8191));	
	client.authenticate(function(error, client) {
		if(error) {
			console.log("Authentication Error: " + error)
		}
		client.readFile("/PaperSketches/vb.png", function(error, data) {
			if(error) {
				console.log("Error: " + error)
			}
			console.log("Data: " + data)
		});
	});
}
