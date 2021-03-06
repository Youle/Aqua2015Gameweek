ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
	
)
.defines(function(){

EntityPlayer = ig.Entity.extend({
	
	// The players (collision) size is a bit smaller than the animation
	// frames, so we have to move the collision box a bit (offset)
	size: {x: 64, y: 64},
	offset: {x: 0, y: 0},
	maxVel: {x: 400, y: 800},
	friction: {x: 1000, y: 0},
	
	type: ig.Entity.TYPE.A, // Player friendly group
	checkAgainst: ig.Entity.TYPE.B,
	collides: ig.Entity.COLLIDES.PASSIVE,
	
	animSheet: new ig.AnimationSheet( 'media/player.png', 64, 64 ),	
	
	// These are our own properties. They are not defined in the base
	// ig.Entity class. We just use them internally for the Player
	flip: false,
	accelGround: 1200,
	accelAir: 600,
	jump: 800,	
	
	costGroundDry: 2,
	oldState: 0,
	state: 0,
	stateIdle: ['idleTier3','idleTier2','idleTier1'],
	isJump: false,

	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		// Add the animations
		this.addAnim( 'idleTier3', 1, [0] );
		this.addAnim( 'idleTier2', 1, [1] );
		this.addAnim( 'idleTier1', 1, [2] );
		this.addAnim( 'death', 1, [3] );

		this.addAnim( 'normal', 1, [0] );
		this.addAnim( 'run', 0.07, [0] );
		this.addAnim( 'jump', 1, [0] );
		this.addAnim( 'fall', 0.4, [0], true ); // stop at the last frame
		this.addAnim( 'pain', 0.3, [0], true );

		// Set a reference to the player on the game instance
		//ig.game.player = this;
		//console.log(this.anims['death']);
		
		
	},	
	update: function() {

		this.currentAnim.flip.x = this.flip;
		this.move();
		this.checkState();
		this.manageCollider();
		this.changeGround({x : this.pos.x + this.size.x/2, y : this.pos.y + this.size.y});
		//console.log(this.pos.x);
		// Move!
		this.parent();
	},
	move: function(){
		// Handle user input; move left or right
		var accel = this.standing ? this.accelGround : this.accelAir;

		if( ig.input.state('left') ) {
			this.accel.x = -accel;
			this.flip = true;
		}
		else if( ig.input.state('right') ) {
			this.accel.x = accel;
			this.flip = false;
		}
		else {
			this.accel.x = 0;
		}

		// jump
		if( ig.input.pressed('jump') && !this.isJump) {
			ig.stats.tank -= ig.stats.jumpTankCost;
			this.vel.y = -this.jump;
			this.isJump = true;
		}
		
		//gestion animation left et right
		if( this.vel.y < 0 ) {
				this.vel.y += 20;

			//this.currentAnim = this.anims.jump;
			this.currentAnim = this.anims[this.stateIdle[this.state]];
		}
		else if( this.vel.y > 0 ) {
			if( this.currentAnim != this.anims.fall ) {
				this.vel.y += 60;
				//this.currentAnim = this.anims.fall.rewind();
				this.currentAnim = this.anims[this.stateIdle[this.state]];
			}
		}
		else if( this.vel.x != 0 ) {
			//this.currentAnim = this.anims.run;
			this.currentAnim = this.anims[this.stateIdle[this.state]];
		}
		else {
			this.currentAnim = this.anims[this.stateIdle[this.state]];
			
		}
		
		if(this.vel.y == 0)
			this.isJump = false;
	},
	changeGround: function(initPos, sub)
	{
		//if(ig.game.backgroundMaps[0].setTile != this.overrideSetTile)ig.game.backgroundMaps[0].setTile = this.overrideSetTile;
		//if(
		//ig.game.backgroundMaps[0].setTile(640,640,1)
		var currentTile = ig.game.backgroundMaps[0].getTile(initPos.x, initPos.y);
		var hasChanged = false;
		if(ig.idTile.idGroundDry.indexOf(currentTile) !== -1)
		{
			hasChanged = true;
			if(!sub){
            	ig.stats.wetGround++;
				ig.stats.tank -= ig.stats.groundCost;}
			ig.game.backgroundMaps[0].setTile(initPos.x, initPos.y, currentTile + ig.idTile.plusIndexGroundWet);
		}
		else if(ig.idTile.idGroundLava.indexOf(currentTile) !== -1){
			hasChanged = true;
			if(!sub){
				ig.stats.wetedLava++
				ig.stats.tank -= ig.stats.lavaCost;}
			ig.game.backgroundMaps[0].setTile(initPos.x, initPos.y, currentTile + ig.idTile.plusIndexGroundLava);
		}

		if(hasChanged)
			this.changeGround({x : initPos.x, y : initPos.y + 64}, true);
		//console.log(ig.game.backgroundMaps[0].getTile(this.pos.x,this.pos.y + this.size.y));
		
	},
	checkState: function()
	{
		//console.log(this.state);
		//console.log(ig.stats.tank % 7 );
		if(ig.stats.tank > 1000 / 3 * 2)
				this.state = 0;
		else if(ig.stats.tank > 1000 / 3)
				this.state = 1;
		else
				this.state = 2;		
	},

	manageCollider: function(){
		if(this.state == this.oldState)return;
		// FAIRE CODE QUI DIMINUE LA HITBOX ICI
		this.oldState = this.state;
	}

});


});