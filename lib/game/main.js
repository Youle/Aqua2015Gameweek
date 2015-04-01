ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.screens.splashscreen'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	//GLOBAL
	stats :{ 
		maxTank: 1000, 
		tank: 1000, 
		jumpTankCost: 11, 
		lavaCost: 35, 
		groundCost: 10, 
		enemyCost: 50, 
		flowerCost: 0, 
		lavaDrop: 13, 
		wetedGround : 0, 
		enemyKilled: 0,
		wetedLava: 0
	},
	idTile:{ 
		idGroundDry: [1, 2, 3, 33, 34, 35, 65, 66, 67],
		plusIndexGroundWet: 3,
		idGroundLava: [7, 8, 9],
		plusIndexGroundLava: 35
	},
	//MUSIC
	
	init: function() {
		// Initialize your game here; bind keys etc.
		ig.stats = this.stats;
		ig.idTile = this.idTile;
		//console.log(ig.stats.reservoir);
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		ig.system.setGame(SplashScreen);
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
	},

});

//Screen scale
var originalWidth = 1280;
var originalHeight = 720;
var screenWidth = window.innerWidth; //Just a test screen width
var scale = Math.round(screenWidth/ originalWidth);
if(scale < 1)
{
    if( scale < 0.35){
        scale = 0.25
    }
    if(scale < 0.65){
        scale = 0.5;
    }
     if( scale < 0.85){
      scale = 0.75;
     }
     else{
        scale = 1;
     }  
}
// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, originalWidth, originalHeight, scale );

});
