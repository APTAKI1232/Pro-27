class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(x,y,25,options)
		World.add(world, this.body);

	}
	display()
	{
			
			
			push()
			ellipseMode(RADIUS);
			fill(1,134,15)
			ellipse(this.body.position.x,this.body.position.y,25,25)
			pop()
			
	}

}

