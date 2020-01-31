
// Create new scene
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
let loader = new THREE.GLTFLoader();
let container = document.getElementById('canvas');
let renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer. domElement);
var model

// Adjust camera position
camera.position.z = 3;
camera.position.x = -3

// Load 3D model
loader.load('./src/assets/helix.gltf', function (gltf) {
    scene.add(gltf.scene);
    model = gltf.scene;
}, undefined, function (error) {
    console.error(error);
} );

// Render the model on animation loop
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();

// Handle window resize
window.addEventListener( 'resize', onWindowResize, false );
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
        camera.position.x = -1 - window.innerWidth / 1000
}

// Handle rotation
loc = $('.container').scrollTop();
$('.container').scroll(function() {
    var newLoc = $('.container').scrollTop();
    var diff = loc - newLoc;
    loc = newLoc;
    model.rotation.y += diff / 200
});