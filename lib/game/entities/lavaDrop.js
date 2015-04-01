ig.module(
    'game.entities.lavaDrop'
).requires(
    'impact.entity'    
).defines(function() {

    EntityLavaDrop = ig.Entity.extend({

        animSheet: new ig.AnimationSheet('media/lavadrop.png', 64, 64),
        size: { x: 64, y: 64 }, 
        offset: { x: 0, y: 0 }, 
        maxVel: {x: 100, y: 100},
        flip: false,
        speed: 100,
        param: {},
        cpt: 0,
        speed  : 40,
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
            this.accel.y = this.speed;
            this.parent();
        },

        handleMovementTrace: function( res ) {
            this.parent( res );

            if( res.collision.y ) {
                this.kill();
            }
        },

        check: function(other){
            ig.stats.tank -= ig.stats.lavaDrop;
            // ANIMATION DE DISPARITION PUIS
            this.kill()
        }
        
    });
    
});