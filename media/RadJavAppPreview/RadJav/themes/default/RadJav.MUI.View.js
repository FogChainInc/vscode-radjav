RadJav.currentTheme.themeObjects["RadJav.MUI.View"].exports =
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

				var html = "<div id = \"" + obj.name + "\" name = \"" + obj.name + "\" type = \"text\" ";
				html += "style = \"" + RadJav.themeUtils.getGObjectSizeString (obj, offset);
				html += " " + RadJav.themeUtils.getGObjectFontString (obj);
				html += " " + RadJav.themeUtils.getGObjectCursorString (obj);
				html += "\">";
				html += "</div>";
				var container = RadJav.OS.HTML5.appendHTML (parentDOM, html);

				if (obj._visible == true)
					dojo.query (container).style ("display", "block");
				else
					dojo.query (container).style ("display", "none");

				resolve (container);
			});

		return (promise);
	},

	setVisibility: function (obj, visible)
	{
		if (obj._html == null)
			return;

		if (visible == true)
			dojo.query (obj._html).style ("display", "block");
		else
			dojo.query (obj._html).style ("display", "none");
	},

	getVisibility: function (obj)
	{
		if (obj._html == null)
			return (obj._visible);

		var value = dojo.query (obj._html).style ("display");
		value = value.toLowerCase ();
		var isVisible = true;

		if (value == "none")
			isVisible = false;

		return (isVisible);
	}
};

