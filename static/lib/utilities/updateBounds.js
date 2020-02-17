export default function updateBounds(scene) {
  scene.physics.world.bounds.setTo(
    0,
    -scene.player.yMax,
    scene.game.scale.width,
    scene.game.scale.height + scene.player.yMax
  );

  scene.cameras.main.setBounds(
    0,
    Math.min(
      scene.camYMin,
      scene.player.character.y - scene.game.scale.height + 152
    ),
    800,
    640,
    true
  );

  scene.camYMin = scene.player.character.y - scene.game.scale.height + 152;
}
