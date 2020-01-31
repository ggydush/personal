var scene = new THREE.Scene();
// scene.background = new THREE.Color( '#FFFFFF' );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );
var loader = new THREE.GLTFLoader();
var model

loader.load('./src/assets/helix.gltf', function (gltf) {
    scene.add(gltf.scene);
    model = gltf.scene;
}, undefined, function (error) {
    console.error(error);
} );


container = document.getElementById('canvas');
// document.body.appendChild(container);
renderer = new THREE.WebGLRenderer( { alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild( renderer.domElement );
renderer.domElement.style = 'z-index: 0;'


camera.position.z = 3;
camera.position.x = -3
function animate() {
    requestAnimationFrame( animate );
    // model.rotation.y += 0.05
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

var rotation = 0,
scrollLoc = $('.container').scrollTop();
$('.container').scroll(function() {
    var newLoc = $('.container').scrollTop();
    var diff = scrollLoc - newLoc;
    scrollLoc = newLoc;
    model.rotation.y += diff / 200
});