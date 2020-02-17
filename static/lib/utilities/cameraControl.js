export default function cameraControl(scene,min){
    scene.cameras.main.setBounds(0,min,800,640,true)
    scene.cameras.main.backgroundColor.setTo(51,255,255); // Temp holder
}