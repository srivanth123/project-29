class SlingShot{

constructor(a,b){

var options={
bodyA:a,
pointB:b,
length:10,
stiffness:0.004,
}
var pointB=this.pointB
this.sling=Constraint.create(options)
World.add(world,this.sling)

}

display(){

    
if(this.sling.bodyA){
    var pointA=this.sling.bodyA.position
    var pointB=this.pointB
line(pointA.x,pointA.y,pointB.x,pointB.y)

}

}

fly(){

this.sling.bodyA=null

}

}