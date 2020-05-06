// Method checks if the first and lowest object is below the lava. If it is, remove it.
export default function outOfBounds(scene, group) {
  if (group.getChildren().length > 0) {
    if (
      group.getChildren()[0].y > scene.lava.lavaObj.y ||
      group.getChildren()[0].x < -100 ||
      group.getChildren()[0].x > 900
    ) {
      group.getChildren()[0].destroy();
    }
  }
}
