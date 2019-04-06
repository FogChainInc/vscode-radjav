RadJav.currentTheme.themeObjects["RadJav.GUI.Image"].exports =
{
	create: function (obj)
	{
		var promise = new Promise (function (resolve, reject)
			{
				var parentDOM = RadJav.OS.HTML5.getParentHTML (obj);

				if (parentDOM.domNode != null)
					parentDOM = parentDOM.domNode;

				var offset = 0;

				if (obj._parent != null)
				{
					if ((obj._parent.type == "Window") || (obj._parent.type == "RadJav.GUI.Window"))
						offset = 35;
				}

				var html = "<img id = \"" + obj.name + "\" name = \"" + obj.name +
					"\" style = \"" + RadJav.themeUtils.getGObjectSizeString (obj, offset);
				html += " " + RadJav.themeUtils.getGObjectCursorString (obj) + "\"";

				if ((obj._image != null) && (obj._image != ""))
					html += " src = \"" + obj._image + "\"";

				html += " />";
				var image = RadJav.OS.HTML5.appendHTML (parentDOM, html);

				if (obj._visible == true)
					dojo.query (image).style ("visibility", "visible");
				else
					dojo.query (image).style ("visibility", "hidden");

				resolve (image);
			});

		return (promise);
	},

	setText: function (obj, text)
	{
		obj._html.set ("text", text);
	},

	getText: function (obj)
	{
		return (obj._html.get ("text"));
	},

	setImage: function (obj, img)
	{
		if (obj._html == null)
			return (null);

		dojo.attr (obj._html, "src", img)
	}
};

