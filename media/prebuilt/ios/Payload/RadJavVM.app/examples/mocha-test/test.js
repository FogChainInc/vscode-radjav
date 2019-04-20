include ("./mocha.min.js").then (function ()
	{
		mocha.setup ({
				ui: "bdd", 
				reporter: "json"
			});
		Mocha.process.stdout.write = function (str){RadJav.Console.println (str);};

		describe('Array', function()
				{
					describe('#indexOf()', function()
						{
							it('should return -1 when the value is not present', function()
								{
										assert.equal([1,2,3].indexOf(4), -1);
								});
						});
				});

		mocha.run ();
	});