export default function updateBounds(scene) {
  scene.physics.world.bounds.setTo(
    0,
    -scene.player.yMax,
    scene.game.scale.width,
    scene.game.scale.height + scene.player.yMax
  );
}
