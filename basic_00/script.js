var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({color:0x00fff0});
var cube1 = new THREE.Mesh(geometry, material);
var cube2 = new THREE.Mesh(geometry, material);
var cube3 = new THREE.Mesh(geometry, material);
scene.add(cube1);
scene.add(cube2);
scene.add(cube3);

cube2.position.x = 5;
cube3.position.y = 5;
camera.position.z = 10;

function render() {
	requestAnimationFrame(render);
	cube1.rotation.x += 0.01;
	cube1.rotation.y += 0.01;
	cube2.rotation.x += 0.1;
	cube2.rotation.y += 0.01;
	cube3.rotation.x += 0.01;
	cube3.rotation.y += 0.1;

	renderer.render(scene, camera);
}

render();
