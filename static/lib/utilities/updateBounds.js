import cameraControl from "/static/lib/utilities/cameraControl.js";

export default function updateBounds(scene) {
  scene.physics.world.bounds.setTo(
    0,
    -scene.player.yMax,
    scene.game.scale.width,
    scene.game.scale.height + scene.player.yMax
  );

  cameraControl(
    scene,
    Math.min(
      scene.camYMin,
      scene.player.character.y - scene.game.scale.height + 152
    )
  );
  scene.camYMin = scene.player.character.y - scene.game.scale.height + 152;
}
