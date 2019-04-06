RadJav.currentTheme.themeObjects["RadJav.GUI.GObject"].exports =
{
	setVisibility: function (obj, visible)
	{
		if (obj._html == null)
			return;

		if (visible == true)
			dojo.query (obj._html).style ("visibility", "visible");
		else
			dojo.query (obj._html).style ("visibility", "hidden");
	},

	getVisibility: function (obj)
	{
		if (obj._html == null)
			return (obj._visible);

		var value = dojo.query (obj._html).style ("visibility");
		value = value.toLowerCase ();
		var isVisible = true;

		if (value == "hidden")
			isVisible = false;

		return (isVisible);
	},

	setText: function (obj, text)
	{
		obj._html.value = text;
	},

	getText: function (obj)
	{
		return (obj._html.value);
	},

	setPosition: function (obj, pos)
	{
		if (obj._html == null)
			return (null);

		var offset = 0;

		if (obj._parent != null)
		{
			if ((obj._parent.type == "Window") || (obj._parent.type == "RadJav.GUI.Window"))
				offset = 35;
		}

		dojo.query (obj._html).style ("left", pos.x + "px");
		dojo.query (obj._html).style ("top", (pos.y) + "px");
	},

	getPosition: function (obj)
	{
		if (obj._html == null)
			return (null);

		var pos = new RadJav.Vector2 ();
		var x = dojo.query (obj._html).style ("left");
		var y = dojo.query (obj._html).style ("top");

		pos.x = x[0];
		pos.y = y[0];

		return (pos);
	},

	setSize: function (obj, size)
	{
		if (obj._html == null)
			return (null);

		dojo.query (obj._html).style ("width", size.x + "px");
		dojo.query (obj._html).style ("height", size.y + "px");
	},

	getSize: function (obj)
	{
		if (obj._html == null)
			return (null);

		var size = new RadJav.Vector2 ();

		if (obj._html.domNode != null)
		{
			size.x = obj._html.domNode.offsetWidth;
			size.y = obj._html.domNode.offsetHeight;
		}
		else
		{
			size.x = obj._html.offsetWidth;
			size.y = obj._html.offsetHeight;
		}

		return (size);
	},

	setEnabled: function (obj, enabled)
	{
		obj._html.disabled = !enabled;
	},

	setEnabled: function (obj, enabled)
	{
		obj._html.disabled = !enabled;
	},

	getEnabled: function (obj)
	{
		return (!obj._html.disabled);
	},

	on: function (obj, eventName, func)
	{
		if (obj._html.addEventListener == null)
			debugger;

		obj._html.addEventListener (eventName, func);
	}
};

