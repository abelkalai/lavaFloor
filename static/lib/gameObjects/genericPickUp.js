export default class GenericPickUp {
  constructor(props) {
    this.scene = props.scene
    this.group = props.group;
    this.xPos = props.xPos;
    this.yPos = props.yPos;
    this.scale = props.scale;
    this.type = props.type;
    this.render();
  }

  render() {
    this.sprite = this.group.create(this.xPos, this.yPos, this.type);
    this.sprite.setDepth(100);
    this.sprite.setScale(this.scale);
    this.scene.physics.add.collider(
      this.sprite,
      this.scene.platforms
    );
  }
}
