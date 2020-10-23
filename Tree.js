class Tree {
    constructor(x, y) {
    this.x = x
    this.y = y    
    this.treeWidth = 450
    this.treeHeight = 600
    this.treeThickness = 10
    this.image = loadImage("plucking mangoes/tree.png")
    this.BottomBody = Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeThickness, {isStatic: true}); 
    this.LeftBody = Bodies.rectangle(0, this.y - this.treeHeight/2, this.treeThickness, this.treeHeight, {isStatic: false}); 
    this.RightBody = Bodies.rectangle(this.x + this.treeWidth/2, this.y - this.treeHeight/2, this.treeThickness, this.treeHeight, {isStatic: false}); 
    World.add(world, this.BottomBody);
    World.add(world, this.LeftBody);
    World.add(world, this.RightBody);
    }
display() {
    var pos = this.BottomBody.position
    push();
    translate(pos.x, pos.y)
    imageMode(CENTER)
    image(this.image, 0, -this.treeHeight/2, this.treeWidth, this.treeHeight)
    pop()
}
}