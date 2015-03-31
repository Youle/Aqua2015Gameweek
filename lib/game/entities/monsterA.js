ig.module(
    'game.entities.monsterA'
).requires(
    'impact.entity'    
).defines(function() {

    EntityMonsterA = ig.Entity.extend({

        animSheet: new ig.AnimationSheet('media/mobA.jpg', 64, 64),
        size: { x: 64, y: 64 }, 
        offset: { x: 0, y: 0 }, 
        maxVel: {x: 100, y: 100},
        flip: false,
        friction: {x: 150, y: 0},
        speed: 100,
        param: {},
        cpt: 0,

        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.PASSIVE,

        init: function(x, y, settings) {
            
            this.parent(x, y, settings);
            
            // Animations
            this.addAnim('run', 0.5, [0,1,2]);
            this.currentAnim = this.anims['run'];
            if(this.param.flip === 1){this.flip = true;}else{this.flip = false;}
            this.currentAnim.flip.x = this.flip;
            
        },
        update: function() {
           
            
            this.parent();
            this.cpt ++;
            
            if((this.cpt%this.param.time) === 0)
            {
                var setting = {dir : this.param.shoot};
                if(this.flip)
                {
                   // ig.game.spawnEntity(EntityMissile, this.pos.x, this.pos.y+4,setting);
                }
                else
                {
                    //ig.game.spawnEntity(EntityMissile, this.pos.x+32, this.pos.y+4,setting);
                }
                
            }
        },

        handleMovementTrace: function( res ) {
            this.parent( res );

            if( res.collision.x ) {
                this.flip = !this.flip;
            }
        },

        check: function(other){
            
            other.dead = true;
        }
        
    });
    
});