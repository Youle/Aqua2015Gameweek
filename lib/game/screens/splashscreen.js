ig.module( 
	'game.screens.splashscreen' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.screens.gamescreen'
)
.defines(function(){

	SplashScreen = ig.Game.extend({

		instructText: new ig.Font( 'media/04b03.font.png' ),
		//background: new ig.Image('media/bg.png'),
		title: new ig.Image('media/titleGame.png'),
		titleX: 360,
		version: "proto 0.1",
		//SOUNDS
		//ok: new ig.Sound( 'sounds/ok.ogg' ),
		init: function() {

			ig.input.bind( ig.KEY.SPACE, 'start');

			ig.input.bind(ig.KEY.Q, 'left');
	    	ig.input.bind(ig.KEY.D, 'right');
	    	ig.input.bind(ig.KEY.S, 'down');
	    	ig.input.bind(ig.KEY.Z, 'up');

	    	ig.input.bind(ig.KEY.A, 'left');
	    	ig.input.bind(ig.KEY.W, 'up');

			ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
			ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
			ig.input.bind( ig.KEY.UP_ARROW, 'jump' );
			ig.input.bind( ig.KEY.DOWN_ARROW, 'down' );

			ig.input.bind( ig.KEY.MOUSE1, 'leftButton' );
			/*
			ig.input.bind( ig.GAMEPAD.PAD_LEFT, 'left' );
			ig.input.bind( ig.GAMEPAD.PAD_RIGHT, 'right' );
			ig.input.bind( ig.GAMEPAD.PAD_BOTTOM, 'down' );
			ig.input.bind( ig.GAMEPAD.PAD_TOP, 'up' );
			ig.input.bind( ig.GAMEPAD.FACE_1, 'start' );
			*/
			
			//ig.music.play('title');
			//ig.music.loop = true;
		},

		update: function() {
			if(ig.input.pressed ('start')){
				//this.ok.play();
				ig.system.setGame(GameScreen)
			}
			this.parent();
			
		},

		draw: function() {
			this.parent();
			//this.background.draw(0,0);
			
			if(this.titleX > 0)
			{
				this.titleX -= 6;
			}
			this.title.draw(this.titleX,ig.system.height/2);
			var x = ig.system.width/2,
			y = ig.system.width/2;
			this.instructText.draw( 'Press Spacebar To Start', x, y,ig.Font.ALIGN.CENTER );
			this.instructText.draw( this.version, 64, ig.system.height - 10,ig.Font.ALIGN.RIGHT );
		},

		
	});

});