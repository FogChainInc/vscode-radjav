RadJav.currentTheme.themeObjects["RadJav.MUI.Navigator"].exports =
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
				html += "overflow-x: hidden; overflow-y: hidden;\">";
				html += "</div>";
				var container = RadJav.OS.HTML5.appendHTML (parentDOM, html);

				if (obj._visible == true)
					dojo.query (container).style ("visibility", "visible");
				else
					dojo.query (container).style ("visibility", "hidden");

				resolve (container);
			});

		return (promise);
	}
};

