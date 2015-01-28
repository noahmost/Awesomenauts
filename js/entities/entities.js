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
            },
        
        
                    
            update: function(delta){
            if(me.input.isKeyPressed("right")){
//                velocity represents our current position, sets position of x by multiplying velocity by me.timer.tick
                    this.body.vel.x += this.body.accel.x * me.timer.tick;
            }else if(me.input.isKeyPressed("left")){
                this.body.vel.x -= this.body.accel.x * me.timer.tick;
            }
            else{
                this.body.vel.x=0;
            }
            this.body.update(delta);
            return true;
            }
});