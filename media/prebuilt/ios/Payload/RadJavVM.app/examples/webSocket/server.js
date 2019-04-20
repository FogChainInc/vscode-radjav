var webServer = new RadJav.Net.WebServer ();

webServer.serve (function (request)
	{
		var response = "";

		if (request.type == RadJav.Net.WebServerRequestType.GET)
		{
			if (request.page == "/")
				response = "Hello world!";
		}

		return (response);
	});

var webSocketServer = webServer.createWebSocketServer (3000);

webSocketServer.on ("connection", function (socket)
	{
		webSocketServer.sendToAll ("Hello World!");
	});

webSocketServer.listen ();
webServer.listen (80);