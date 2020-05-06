export default function pauseFunction(currentScene, sceneKey) {
  const pKey = currentScene.input.keyboard.addKey("P");

  pKey.onDown = () => {
    if (sceneKey === "main") {
      currentScene.pauseSound.play()
      currentScene.scene.pause("main");
      currentScene.scene.launch("pause");
    } else{
      currentScene.pauseSound.play()
      currentScene.scene.stop("pause");
      currentScene.scene.resume("main");
    }
  };
}
