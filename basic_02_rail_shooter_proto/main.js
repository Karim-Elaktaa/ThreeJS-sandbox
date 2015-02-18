var scene, camera, renderer, raycaster, mouse, lastModifiedCube;

function init(){
	// init the basic elements
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	camera.position.z = 10;

	// init the mouse vector
	mouse = new THREE.Vector2();

	// init the raycaster
	raycaster = new THREE.Raycaster();

	// light init
	var light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(1, 1, 1).normalize();
	scene.add(light);


	document.addEventListener('mousemove', onMouseMove, false);
	document.addEventListener('click', onClick, false);
	window.addEventListener('resize', onWindowResize, false);
	// keyboard inputs
	window.addEventListener('keydown', checkKeyPressed, false);
	window.addEventListener('keyup', checkKeyReleased, false);
}

function onWindowResize(){
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

// LISTENERS
function onMouseMove(event){
	event.preventDefault();
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function onClick(){

}

function checkKeyPressed(e){

}

function checkKeyReleased(e){

}

function updateCameraMvt(){
	
}

function checkRayCasting(){
	// raycaster.setFromCamera(mouse, camera);
	// var intersects = raycaster.intersectObjects(scene.children);
	// if (intersects.length > 0 && intersects[0].object){
	// 	if(lastModifiedCube != intersects[0].object){
	// 		if(lastModifiedCube){
	// 			lastModifiedCube.material.emissive.setHex(lastModifiedCube.currentHex);
	// 		}
	// 		lastModifiedCube = intersects[0].object;
	// 		lastModifiedCube.currentHex = lastModifiedCube.material.emissive.getHex();
	// 		lastModifiedCube.material.emissive.setHex( 0xff0000 );
	// 	}
	// }
	// else{
	// 	if(lastModifiedCube){
	// 		lastModifiedCube.material.emissive.setHex(lastModifiedCube.currentHex);
	// 		lastModifiedCube = null;
	// 	}
	// }
}

function render(){
	modifyRotationOfCubes();
	checkRayCasting();
	updateCameraMvt();
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}

init();
render();
