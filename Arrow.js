class Arrow extends BaseClass{
    constructor(x, y){
        super(x, y, 70, 70);
        this.image = loadImage("./sprites/arrow.png");
        this.smokeImage = loadImage("./sprites/smoke.png");
        this.trajectory = [];
    }

    display(){
        super.display();
        if(this.body.velocity.x > 10 && this.body.position.x > 220) {
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
            //console.log(this.trajectory);
        }
        for(var i = 0; i < this.trajectory.length; i++) {
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        }
    }
}
