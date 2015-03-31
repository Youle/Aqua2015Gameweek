ig.module(
	'game.entities.lifeGui'
)
.requires(
	'impact.entity'
	
)
.defines(function(){

EntityLifeGui = ig.Entity.extend({
	
	// The players (collision) size is a bit smaller than the animation
	// frames, so we have to move the collision box a bit (offset)
	size: {x: 64, y: 64},
	offset: {x: 0, y: 0},
	
	//animSheet: new ig.AnimationSheet( 'media/plant.png', 64, 64 ),	
	
	// These are our own properties. They are not defined in the base
	// ig.Entity class. We just use them internally for the Player
	

	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
	},
	
	update: function() {

		this.parent();
	}
});


});