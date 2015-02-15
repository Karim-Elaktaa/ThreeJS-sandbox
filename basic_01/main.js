var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var allCubes = [];

function createSceneElements(){
	var light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(1, 1, 1).normalize();
	scene.add(light);
	var geometryCube = new THREE.BoxGeometry(1, 1, 1);
	var material = new THREE.MeshBasicMaterial({color:0x00fff1});
	var cube = new THREE.Mesh(geometryCube, material);
	scene.add(cube);

	camera.position.z = 10;
	var range = 50;
	for(i = 0; i < 200; i++){
		//var grayness = Math.random() * 0.5 + 0.25;	
		//material.color.setRGB(grayness, grayness, grayness);
		//cube.grayness = grayness;
		cube = new THREE.Mesh(geometryCube, new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff }));
	    cube.position.set( range * (0.5 - Math.random()), range * (0.5 - Math.random()), range * (0.5 - Math.random()) );
	    cube.rotation.set( Math.random(), Math.random(), Math.random() );
		scene.add(cube);
		allCubes[allCubes.length] = cube;
	}
}

function modifyRotationOfCubes(){
	allCubes.forEach(modifyRotationOfOneCube);
}

function modifyRotationOfOneCube(element, index, array){
	var pondRotation = 10;
	element.rotation.set( element.rotation.x + Math.random()/pondRotation, element.rotation.y + Math.random()/pondRotation, element.rotation.y + Math.random()/pondRotation );
}

function testRayCasting(){
}

function render(){
	modifyRotationOfCubes();
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}

testRayCasting();
createSceneElements();
render();
