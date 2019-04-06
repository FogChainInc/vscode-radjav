RadJav.currentTheme.themeObjects["RadJav.GUI.HTMLElement"].exports =
{
	create: function (obj)
	{
		var promise = new Promise (function (resolve, reject)
			{
				var dom = RadJav.OS.HTML5.selectDOM ("#" + obj.name);
				dom.domNode = dom;

				obj._html = dom;
				resolve (dom);
			});

		return (promise);
	},

	setText: function (obj, text)
	{
		RadJav.OS.HTML5.appendHTML (obj._html, text);
	},

	getText: function (obj)
	{
		return (obj._html.toString ());
	},

	on: function (obj, eventName, func)
	{
		obj._html.addEventListener (eventName, func);
	},

	getHTMLDOM: function (obj)
	{
		return (obj._html.domNode);
	}
};

