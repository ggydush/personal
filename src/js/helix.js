
// Create new scene
let container = document.getElementById('model');
const width = container.offsetWidth
const height = container.offsetHeight
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, width / height, 1, 100);
let loader = new THREE.GLTFLoader();
let renderer = new THREE.WebGLRenderer({ alpha: true , antialias: true });
let light = new THREE.PointLight( 0x44a08d , 3, 100 );
light.position.set(0, 50, 0);
scene.add(light);
camera.position.z = 3;
renderer.setSize(width, height);
container.appendChild(renderer.domElement);
var model


// Load model
loader.load('./src/assets/old/helix.gltf', function (gltf) {
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


// Handle rotation
loc = $('.container').scrollTop();
$('.container').scroll(function() {
    var newLoc = $('.container').scrollTop();
    var diff = loc - newLoc;
    loc = newLoc;
    model.rotation.y += diff / 200
});

$(function() {
    $('.pylibs').hover(function() {
      $('.pylibs').css('color', 'rgba(255, 255, 255, 0.468)');
    }, function() {
      $('.pylibs').css('color', 'black');
    });
  });
  $(function() {
    $('.jslibs').hover(function() {
      $('.jslibs').css('color', 'rgba(255, 255, 255, 0.468)');
    }, function() {
      $('.jslibs').css('color', 'black');
    });
  });