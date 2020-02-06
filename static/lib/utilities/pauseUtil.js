export default function pauseFunction(scene, sceneKey) {
  let pKey = scene.input.keyboard.addKey("P");

  pKey.onDown = () => {
    if (sceneKey == "main") {
      scene.scene.pause("main");
      scene.scene.launch("pause");
    } else{
      scene.scene.sleep("pause");
      scene.scene.resume("main");
    }
  };
}
