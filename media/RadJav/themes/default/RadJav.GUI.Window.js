RadJav.currentTheme.themeObjects["RadJav.GUI.Window"].exports =
{
	create: function (obj)
	{
		var promise = new Promise (function (resolve, reject)
			{
				var parentDOM = RadJav.OS.HTML5.getParentHTML (obj);
				var html = "<div id = \"" + obj.name + "\" name = \"" + obj.name + "\">";
				html += "<div id = \"" + obj.name + "-menubar\" style = \"display: none;\"></div>";
				html += "<div data-window-type = \"content\"></div>";
				html += "</div>";
				RadJav.OS.HTML5.appendHTML (parentDOM, html);

				var win = new dojox.layout.FloatingPane ({
							id: obj.name, title: obj._text,
							resizable: true, dockable: false,
							style: "width: " + obj.getWidth () +
								"px; height: " + obj.getHeight () + "px; visibility: hidden;",
						}, dojo.byId (obj.name));
				win.startup ();

				if (obj._visible == true)
					win.show ();

				resolve (win);
			});

		return (promise);
	},

	setText: function (obj, text)
	{
		obj._html.set ("title", text);
	},

	getText: function (obj)
	{
		return (obj._html.get ("title"));
	},

	setVisibility: function (obj, visible)
	{
		if (visible == true)
			obj._html.show ();
		else
			obj._html.hide ();
	},

	getVisibility: function ()
	{
		return (obj._html.get ("display"));
	},

	on: function (obj, eventName, func)
	{
		obj._html.on (eventName, func);
	}
};

