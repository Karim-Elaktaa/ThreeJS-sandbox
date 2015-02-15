var scene, camera, renderer;
var allCubes = [];

function init(){
	// init the basic elements
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	camera.position.z = 10;

	// light init
	var light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(1, 1, 1).normalize();
	scene.add(light);

	var geometryCube = new THREE.BoxGeometry(1, 1, 1);
	//var material = new THREE.MeshBasicMaterial({color:0x00fff1});

	// use a range for the random position of the cubes
	var range = 50;
	for(i = 0; i < 200; i++){
		var cube = new THREE.Mesh(geometryCube, new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff }));
	    cube.position.set( range * (0.5 - Math.random()), range * (0.5 - Math.random()), range * (0.5 - Math.random()) );
	    cube.rotation.set( Math.random(), Math.random(), Math.random() );
		cube.scale.x = Math.random() + 0.7;
		cube.scale.y = Math.random() + 0.7;
		cube.scale.z = Math.random() + 0.7;
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

function render(){
	modifyRotationOfCubes();
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}

init();
render();
