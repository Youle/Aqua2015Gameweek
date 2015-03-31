ig.module( 
	'game.screens.gamescreen' 
)
.requires(
	'impact.game',
	'impact.font',
	'plugins.camera',
	//LEVELS
	// game/levels/level1.js
	'game.levels.level0',
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
		
		levelCurrent: 0,
		
		showStat: false,
		showTutos: false,

		player: null,
		plants:[],
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
			this.player = this.getEntitiesByType( EntityPlayer )[0];
			this.setupCamera();
			//console.log();

			//console.log(ig.game.backgroundMaps[0]);
			//console.log();
			//ig.game.collisionMap.setTile(640,592,1);
			//ig.game.backgroundMaps[0].setTile(640,592, ig.idTile.idGroundDry);
		},

		update: function() {
			
			// Camera follows the player
			this.camera.follow( this.player );
			
			this.parent();
		},

		draw: function() {
			this.parent();
			
			this.font.draw( 'Level: ' + this.levelCurrent, ig.system.width - 128, 10 );
			
		},

		nextLevel: function(){

		},

		setupCamera: function() {
			// Set up the camera. The camera's center is at a third of the screen
			// size, i.e. somewhat shift left and up. Damping is set to 3px.		
			this.camera = new ig.Camera( ig.system.width/3, ig.system.height/3, 3 );
			
			// The camera's trap (the deadzone in which the player can move with the
			// camera staying fixed) is set to according to the screen size as well.
	    	this.camera.trap.size.x = ig.system.width/10;
	    	this.camera.trap.size.y = ig.system.height/3;
			
			// The lookahead always shifts the camera in walking position; you can 
			// set it to 0 to disable.
	    	this.camera.lookAhead.x = ig.system.width/6;
			
			// Set camera's screen bounds and reposition the trap on the player
	    	this.camera.max.x = this.collisionMap.pxWidth - ig.system.width;
	    	this.camera.max.y = this.collisionMap.pxHeight - ig.system.height;
	    	this.camera.set( this.player );
		},

		loadMap: function(){

			var level ;
			switch(this.levelCurrent){

				case 0:
					level = LevelLevel0;
					break;

				case 1:
					level = LevelLevel1;
					break;
			}
			this.loadLevel(level);
			
			//var testthis.loadLevel(level);
		}
	});

});