class Snowfall{
    constructor(x, y){
        var options = {
            airFriction : 1.0,
            density : 1.0,
            restitution : 1.0
        }
    this.snow = Bodies.circle(x, y, 10, options)
    this.radius = 10;
    this.image = loadImage ("snow4.webp");
    World.add(world, this.snow);
    }
    uptdateY (){
        if (this.snow.postion.y > height){
            Matter.Body.setPosition(this.snow,{x : random(0,800),y : random(0, 400)})
        }
    }
    display(){
        imageMode(CENTER);
        this.image(this.image, this.snow.position.x, this.snow.position.y,this.radius, this.radius);
        //ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius);
    }
}