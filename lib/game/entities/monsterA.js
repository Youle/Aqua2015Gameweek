ig.module(
    'game.entities.monsterA'
).requires(
    'impact.entity'    
).defines(function() {

    EntityMonsterA = ig.Entity.extend({

        animSheet: new ig.AnimationSheet('media/lavadrop.png', 64, 64),
        size: { x: 64, y: 64 }, 
        offset: { x: 0, y: 0 }, 
        maxVel: {x: 100, y: 100},
        flip: false,
        friction: {x: 150, y: 0},
        speed: 100,
        param: {},
        cpt: 0,
        speed: 20,
        moveAmplitude: 32,
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
            this.originalPosX = x;
        },
        update: function() {
            this.parent();
            this.move();
        },
        move : function(){
            // vers la gauche
            if(this.flip){
                this.accel.x = -this.speed;
                if(this.pos.x < this.originalPosX - this.moveAmplitude)
                    this.flip = false;
            }

            // vers la droite
            else{
                this.accel.x = this.speed;
                if(this.pos.x > this.originalPosX + this.moveAmplitude)
                    this.flip = true;
            }
        },

        check: function(other){
            ig.stats.enemyKilled++;
            ig.stats.tank -= ig.stats.enemyCost;

            this.kill();
        }
        
    });
    
});