/*
This entity calls ig.game.loadLevel() when its triggeredBy() method is called -
usually through an EntityTrigger entity.


Keys for Weltmeister:

level
	Name of the level to load. E.g. "LevelTest1" or just "test1" will load the 
	'LevelTest1' level.
*/

/*ig.module(
	'game.entities.levelchange'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
EntityLevelchange = ig.Entity.extend({
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(0, 0, 255, 0.7)',
	
	size: {x: 64, y: 64},
	level: null,
	animSheet: new ig.AnimationSheet('media/mobA.jpg', 64, 64),
	checkAgainst: ig.Entity.TYPE.A,
	init: function(){
		this.addAnim('run', 0.5, [0]);
        this.currentAnim = this.anims['run'];
    },
	triggeredBy: function( entity, trigger ) {
		if( this.level ) {
			var levelName = this.level.replace(/^(Level)?(\w)(\w*)/, function( m, l, a, b ) {
				return a.toUpperCase() + b;
			});
			
			ig.levelCurrent = levelName;
			ig.game.loadLevelDeferred( ig.global['Level'+levelName] );
		}
	},
	check: function(){
		console.log("COCUOU");
	},
	
	update: function(){}
});

});*/

ig.module(
    'game.entities.levelchange'
).requires(
    'impact.entity'    
).defines(function() {

    EntityLevelchange = ig.Entity.extend({

        animSheet: new ig.AnimationSheet('media/mobA.jpg', 64, 64),
        size: { x: 64, y: 64 }, 
        offset: { x: 0, y: 0 }, 
        maxVel: {x: 100, y: 100},
        flip: false,
        friction: {x: 150, y: 0},
        speed: 100,
        cpt: 0,
        param: {
        },
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.PASSIVE,

        init: function(x, y, settings) {
            
            this.parent(x, y, settings);
            
            // Animations
            this.addAnim('run', 0.5, [0]);
            this.currentAnim = this.anims['run'];
            if(this.param.flip === 1){this.flip = true;}else{this.flip = false;}
            this.currentAnim.flip.x = this.flip;
            
        },
        update: function() {
            this.parent();
        },

        handleMovementTrace: function( res ) {
            this.parent( res );

            if( res.collision.x ) {
                this.flip = !this.flip;
            }
        },

        triggeredBy: function( entity, trigger ) {
			if( this.levelToLoad ) {
				var levelName = this.levelToLoad.replace(/^(Level)?(\w)(\w*)/, function( m, l, a, b ) {
					return a.toUpperCase() + b;
				});
				
				ig.levelCurrent = levelName;
				ig.game.loadLevelDeferred( ig.global['Level'+levelName] );
			}
		},
		check: function(other){
			this.triggeredBy(other)
		}
        
    });
    
});