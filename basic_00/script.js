var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var geometryCube = new THREE.BoxGeometry(1, 1, 1);
var geometrySphere = new THREE.SphereGeometry(0.5, 0.5, 0.5);
var material = new THREE.MeshBasicMaterial({color:0x00fff0});
var cube1 = new THREE.Mesh(geometryCube, material);
var cube2 = new THREE.Mesh(geometryCube, material);
var cube3 = new THREE.Mesh(geometryCube, material);
scene.add(cube1);
scene.add(cube2);
scene.add(cube3);

cube2.position.x = 5;
cube3.position.y = 5;

var sphere = new THREE.Mesh(geometrySphere, material);

scene.add(sphere);

sphere.position.x = -5;

camera.position.z = 10;

var toggleSphereMvt = true;
var ItrSphereMvt = 0;

function render() {
	requestAnimationFrame(render);
	cube1.rotation.x += 0.01;
	cube1.rotation.y += 0.01;
	cube2.rotation.x += 0.1;
	cube2.rotation.y += 0.01;
	cube3.rotation.x += 0.01;
	cube3.rotation.y += 0.1;

	if(toggleSphereMvt){
		if(ItrSphereMvt > 30){
			toggleSphereMvt = !toggleSphereMvt;
			ItrSphereMvt = 0;	
		}
		ItrSphereMvt++;
		sphere.position.z += 0.1;
	}
	else{
		if(ItrSphereMvt > 30){
			toggleSphereMvt = !toggleSphereMvt;
			ItrSphereMvt = 0;				
		}
		ItrSphereMvt++;
		sphere.position.z -= 0.1;
	}

	renderer.render(scene, camera);
}

render();
