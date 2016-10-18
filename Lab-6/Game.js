var counter = 0;


function Game()
{

}

Game.prototype.init = function()
{
	console.log("Initialising game");
}

Game.prototype.update = function()
{

	counter++;
	console.log(counter);
	window.requestAnimationFrame(app.game.update());
}