ig.module(
    'game.entities.lavaDropper'
).requires(
    'impact.entity'    
).defines(function() {

    EntityLavaDropper = ig.Entity.extend({

        animSheet: new ig.AnimationSheet('media/lavadropper.png', 64, 64),
        size: { x: 64, y: 64 }, 
        offset: { x: 0, y: 0 }, 
        maxVel: {x: 0, y: 0},
        flip: false,
        friction: {x: 150, y: 0},
        speed: 100,
        param: {},
        cpt: 0,

        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.PASSIVE,

        timer : 0,
        dropTime : 300,

        init: function(x, y, settings) {
            
            this.parent(x, y, settings);
            
            // Animations
            this.addAnim('run', 0.5, [0]);
            this.currentAnim = this.anims['run'];
            if(this.param.flip === 1){this.flip = true;}else{this.flip = false;}
            this.currentAnim.flip.x = this.flip;
            
        },
        update: function() {
            if(this.timer > this.dropTime){
                this.timer = 0;
                ig.game.spawnEntity(EntityLavaDrop, this.pos.x, this.pos.y,{});
            }
            this.timer++;
            this.parent();
        },

        handleMovementTrace: function( res ) {
            this.parent( res );
        },

        check: function(other){ 
            other.dead = true;
        }
        
    });
    
});