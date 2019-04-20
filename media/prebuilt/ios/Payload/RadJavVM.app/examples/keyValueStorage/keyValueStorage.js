var win = new RadJav.GUI.Window ("win", "Window Example");

// Stupid hack for now. Delete in the future. Should throw errors in HTML5.
win.create ().then (function (win2)
	{
	});

// Initialize the key value storage database.
var storage = new RadJav.DB.KeyValueStorage ();

// Open the database.
storage.open ("./example.db").then (function ()
	{
		// Write "value" to a key with the name "k".
		storage.write ("k", "value").then (function ()
			{
				// Once writing is complete, read from the k value. 
				// Pass the value to the data argument.
				storage.read ("k").then (function (data)
					{
						alert ("Complete! The following value was stored: " + data);
						storage.close ();
					});
			});
	});

