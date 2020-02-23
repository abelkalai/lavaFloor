
export default class Platform{
    constructor(props){
        this.platforms=props.platforms
        this.walls=props.walls
        this.x=props.x
        this.y=props.y
        this.width=props.width/2
        this.type=props.type
        this.spawnBoundary()
    }

    spawnBoundary() {
        let plat=this.platforms.create(this.x, this.y, this.type);
        plat.setDepth(100)
        this.walls.create(this.x-this.width <= 0 ? 2 : this.x-this.width, this.y - 65, "wall");
        this.walls.create(this.x+this.width >= 800 ? 797 : this.x+this.width, this.y - 65, "wall");
        this.walls.setVisible(false)
      }

}