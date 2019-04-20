var webServer = new RadJav.Net.WebServer ();

/*webServer.serve (function (request)
	{
		var response = "";

		if (request.type == RadJav.Net.WebServerRequestType.GET)
		{
			if (request.page == "/")
				response = "Hello world!";
		}

		return (response);
	});

webServer.listen (80);*/

webServer = null;

//collectGarbage ();
RadJav.exit ();