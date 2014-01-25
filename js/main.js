enchant();

window.onload = function(){
	var game = new Game(640, 480);
	game.preload('assets/chara1.png')

	game.preload('');

	game.fps = 30;
	game.scale = 1;
	game.onload = function(){
		var scene = new Scene();

		var sprite = new Sprite(32, 32);
		sprite.x = 100; 
		sprite.y = 20;

		var map = new Map(16, 16);
		map.image = game.assets['assets/map2.png']



		var MOVE_SPEED = 5;
		sprite.image = game.assets['assets/chara1.png']
		scene.addChild(sprite);
		game.pushScene(scene);

		game.addEventListener('enterframe', function(){
			if (game.input.left){
				sprite.x -= MOVE_SPEED;
				sprite.rotate(180);
			}
			else if (game.input.right){
				sprite.x += MOVE_SPEED;
			}
			if (game.input.up){
				sprite.y -= MOVE_SPEED;
			}
			else if (game.input.down){
				sprite.y += MOVE_SPEED;
			}
		});
	};
	game.start();
};