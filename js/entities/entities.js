game.PlayerEntity = me.Entity.extend ({
        init: function(x, y, settings){
            this._super(me.Entity, "init", [x, y, {
            image: "player",
            width: 64,
            height: 64,
//            the actual images width and height
            spritewidth: "64",
            spriteheight: "64",
            getShape: function(){
                return(new me.Rect(0, 0, 64, 64)).toPolygon();
            }
            
            
                }]);
//            this sets the speed that the character is going
            this.body.setVelocity(10, 20);
            
            this.renderable.addAnimation("idle", [78]);
            this.renderable.addAnimation("walk", [117, 118, 119, 120, 121, 123, 124, 125], 80);
            
            this.renderable.setCurrentAnimation("idle");
            },
        
        
                    
            update: function(delta){
            if(me.input.isKeyPressed("right")){
//                velocity represents our current position, sets position of x by multiplying velocity by me.timer.tick
                    this.body.vel.x += this.body.accel.x * me.timer.tick;
//                    this flips the character around
                    this.flipX(true);
            }else if(me.input.isKeyPressed("left")){
                this.body.vel.x -= this.body.accel.x * me.timer.tick;
//                this flips the character around
                this.flipX(false);
            }
            else{
                this.body.vel.x=0;
            }
//            this sets it so that if the character isnt moving then it shows the idle animation
                if(this.body.vel.x !== 0){
                    if(!this.renderable.isCurrentAnimation("walk")){
                        this.renderable.setCurrentAnimation("walk");
                    }
        }else{
            this.renderable.setCurrentAnimation("idle");
        }
            this.body.update(delta);
            
            this._super(me.Entity, "update", [delta]);
            
            return true;
            }
});