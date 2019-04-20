// inspector-demo.js
// Receiver function called by d8.
function receive(message) {
  print(message)
}

const msg = JSON.stringify({
      id: 0,
      method: "Debugger.enable",
    });

// Call the function provided by d8.
send(msg);

// Run this file by executing 'd8 --enable-inspector inspector-demo.js'.
// Initialize RadJav and load all necessary libraries.
RadJav.initialize (RadJav.getStandardLibrary (), RadJav.getGUILibrary ()).then (function ()
	{
		// Execute the application, in this case, a simple function. Can also be a file.
		RadJav.runApplication (function ()
			{
				// Create the window gui object.
				var win = new RadJav.GUI.Window ("win", "Window Example");

				// Now you must actually create and display the gui object.
				// The promise returns with the created gui object.
				win.create ().then (function (win2)
					{
						// RadJav.GUI.create is short hand for creating a gui object, this 
						// is the preferred way to create objects.
						RadJav.GUI.create ("Button", "button", "Say Hello", win2).then (
											function (button)
											{
												// Add an event named "click", so when the 
												// button is clicked, a message box will 
												// appear saying, "Hello World!"
												button.on ("click", function ()
													{
														alert ("Hello World!");
													});
											});
					});
			});
	});