export default function pauseFunction(scene, sceneKey) {
  let pKey = scene.input.keyboard.addKey("P");

  pKey.onDown = () => {
    if (sceneKey == "main") {
      scene.pauseSound.play()
      scene.scene.pause("main");
      scene.scene.launch("pause");
    } else{
      scene.pauseSound.play()
      scene.scene.sleep("pause");
      scene.scene.resume("main");
    }
  };
}
