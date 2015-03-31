ig.module( 
	'game.screens.gamescreen' 
)
.requires(
	'impact.game',
	'impact.font',
	'plugins.camera',
	//LEVELS
	// game/levels/level1.js
	'game.levels.level1'
	//'game.levels.level2',
	//'game.levels.level3',
	//'game.levels.level4',
	//'game.levels.level5',
	//'game.levels.level6',
	//'game.levels.level7',
	//'game.levels.level8',
	//'game.levels.level9',

	//ENTITIES
	//CONFS
	//SCREENS
	//'game.screens.gameoverscreen'
)
.defines(function(){

GameScreen = ig.Game.extend({

		//FONT
		font: new ig.Font( 'media/04b03.font.png' ),
		//GUI
		
		//tutosScreen: new ig.Image('media/tutorial.png'),

		//VARIABLES
		
		levelCurrent: 1,
		
		showStat: false,
		showTutos: false,

		//SOUNDS
		//hit: new ig.Sound( 'sounds/hit.ogg' ),
		//ok: new ig.Sound( 'sounds/ok.ogg' ),
		//victory: new ig.Sound( 'sounds/victory.ogg' ),

		//SETTINGS
		gravity: 800,

		init: function(data) {
			// Initialize your game here; bind keys etc.
	    	
	    	/*
	    	ig.music.play('game');
			ig.music.loop = true;
			this.showTutos = true;
			*/
			//this.levelCurrent = 1;
			
			this.loadMap();
			//console.log();

			console.log(ig.game.backgroundMaps[0]);
		},

		update: function() {
			
			
			
			
			var player = this.getEntitiesByType( EntityPlayer )[0];
			if(player)
			{
				this.screen.x = player.pos.x - ig.system.width/2;
    			this.screen.y = (player.pos.y - 128) - ig.system.height/2;

    			/*
    			if(ig.input.pressed ('start'))
				{
					this.showTutos = false;
				}
				*/
			}
			this.parent();
		},

		draw: function() {
			this.parent();

			
			this.font.draw( 'Level: ' + this.levelCurrent, ig.system.width - 128, 10 );
			
		},

		nextLevel: function(){

		},

		loadMap: function(){

			var level ;
			switch(this.levelCurrent){
				case 1:
					level = LevelLevel1;
					break;
			}
			this.loadLevel(level);
			
			//var testthis.loadLevel(level);
		}
	});

});