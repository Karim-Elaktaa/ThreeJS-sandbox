var scene, camera, renderer, raycaster, mouse, lastModifiedCube;
var allCubes = [];

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

	var geometryCube = new THREE.BoxGeometry(1, 1, 1);
	//var material = new THREE.MeshBasicMaterial({color:0x00fff1});

	// generation of the N cubes
	var N = 200;
	// use a range for the random position of the cubes
	var range = 50;
	for(i = 0; i < N; i++){
		var cube = new THREE.Mesh(geometryCube, new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff }));
	    cube.position.set( range * (0.5 - Math.random()), range * (0.5 - Math.random()), range * (0.5 - Math.random()) );
	    cube.rotation.set( Math.random(), Math.random(), Math.random() );
		cube.scale.x = Math.random() + 0.7;
		cube.scale.y = Math.random() + 0.7;
		cube.scale.z = Math.random() + 0.7;
		scene.add(cube);
		allCubes[allCubes.length] = cube;
	}

	document.addEventListener('mousemove', onMouseMove, false);
}

function modifyRotationOfCubes(){
	allCubes.forEach(modifyRotationOfOneCube);
}

function modifyRotationOfOneCube(element, index, array){
	var pondRotation = 10;
	element.rotation.set( element.rotation.x + Math.random()/pondRotation, element.rotation.y + Math.random()/pondRotation, element.rotation.y + Math.random()/pondRotation );
}

function onMouseMove(event){
	event.preventDefault();
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function checkRayCasting(){
	raycaster.setFromCamera(mouse, camera);
	var intersects = raycaster.intersectObjects(scene.children);
	if (intersects.length > 0 && intersects[0].object){
		if(lastModifiedCube != intersects[0].object){
			if(lastModifiedCube){
				lastModifiedCube.material.emissive.setHex(lastModifiedCube.currentHex);
			}
			lastModifiedCube = intersects[0].object;
			lastModifiedCube.currentHex = lastModifiedCube.material.emissive.getHex();
			lastModifiedCube.material.emissive.setHex( 0xff0000 );
		}
	}
	else{
		if(lastModifiedCube){
			lastModifiedCube.material.emissive.setHex(lastModifiedCube.currentHex);
			lastModifiedCube = null;
		}
	}
}

function render(){
	modifyRotationOfCubes();
	checkRayCasting();
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}

init();
render();
