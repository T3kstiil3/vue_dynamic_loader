"use strict";

let express = require('express');
let app = express();
let http = require('http').Server(app);

app.use(express.static('./public/'));
app.use(express.static('./node_modules/'));
app.get('/', function (req, res) {
    res.sendfile("public/index.html");
});

/**
 * Server itself
 * @type {http.Server}
 */
let server = app.listen(8080, function () {
    //print few information about the server
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server running and listening @ " + host + ":" + port);
});

/** list of plugins to be loaded */
let pluginsList = [
    /*{
        "pluginName": "drinker",
        "eltName": "drinker-item",
        "mainFile": "drinker.component.js",
        "attributes": {
            "drinker": {
                "name": "Gwen",
                "quantity": 8,
                "email": "gwennael.buchet@gmail.com",
                "platforms": [
                    {
                        "name": "AWS",
                        "quantity": 8
                    }
                ]
            }
        }
    },*/
    {
        "pluginName": "hello",
        "eltName": "hello-item",
        "mainFile": "hello.component.js", //filesToLoad:"xx.js;yy.js" //cssToLoad:"cc.css"
        "attributes": {}
    },
	{
		"pluginName": "hello",
		"eltName": "hello-item",
		"mainFile": "hello.component.js", //filesToLoad:"xx.js;yy.js" //cssToLoad:"cc.css"
		"attributes": {}
	},
    {
        "pluginName": "helloparams",
        "eltName": "helloparams-item",
        "mainFile": "helloparams.component.js",
        "attributes": {
            "name":"marcel"
        }
    }
];
/**
 * Get a list of JSON for all registered plugins
 * @path /pluginsList
 * @HTTPMethod GET
 * @returns {string}
 */
app.get("/pluginsList", function (req, res) {
    res.send(pluginsList);
});



