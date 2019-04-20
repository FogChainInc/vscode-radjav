var webSocketServer = new RadJav.Net.WebSocketServer ();

webSocketServer.on ("connection", function (socket)
{
	webSocketServer.sendToAll ("Hello World!");
});
webSocketServer.listen ();
alert ("Hello World!");