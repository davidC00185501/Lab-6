var width;	 var height;
var ctx;	var canvas;
var game;
app = {};

function main()
{
	app.game = new Game();
	canvas = document.createElement("canvas");
	document.body.appendChild(canvas);
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	ctx = canvas.getContext("2d");

	app.game.init();
	app.game.update();
}

