ig.module(
	'game.entities.plant'
)
.requires(
	'impact.entity'
	
)
.defines(function(){

EntityPlant = ig.Entity.extend({

	size: {x: 64, y: 192},
	offset: {x: 32, y: 0},
	
	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.A,
	collides: ig.Entity.COLLIDES.PASSIVE,

	animSheet: new ig.AnimationSheet('media/plant.png', 64, 192),	
	
	init: function( x, y, settings ) {

		this.parent( x, y, settings );
		this.addAnim( 'open', 1, [0,1,2],true);
		this.addAnim( 'idle', 1, [0] );

		this.currentAnim = this.anims['idle'];
	},
	
	update: function() {

		this.parent();
	},

	check: function(){
          this.currentAnim = this.anims['open'];
          this.open();
    },

	open: function()
	{
		ig.game.collisionMap.setTile(this.pos.x,this.pos.y,1);
		ig.game.backgroundMaps[0].setTile(this.pos.x,this.pos.y, ig.idTile.idGroundDry);
	}

});


});
