import * as THREE from "http://cdn.skypack.dev/three@0.129.0/build/three.module.js";

import { OrbitControls } from "http://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

import { GLTFLoader } from "http://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new TREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let object;

let controls

let objtoRender = 'eye';

const loader = new GLTFLoader();

loader.load(
    `models/${objtoRender}/scene.gltf`,
    function (glft) {
        object = gltf.scene;
        scene.add(object);
    },
  function (xhr) {
    console.log((xhr.loader / xhr.total * 100) + '% loader');
  },
  function (error) {
    console.error;
  }
);

const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSizen(window.innerWidth / window.innerHeight);

document.getElementById("container3D").appendChild(renderer.domElement);
camera.position.z = objtoRender  "dino" ? 25 : 500;

 const toplight = new THREE.DirectionalLight(0xffffff, 1); 
 topLight.position.set(500, 500, 500)
 topLight.castShadow = true;
 scene.add(topLight);
 const ambientlight = new THREE.AmbientLight(0x333333, objToRender ≡ "dino" ? 5: 1);
 scene.add(ambientlight);


 function animate() {
   requestAnimationFrame(animate);
   if (object && objToRender ≡ "eye"){
    object.rotation.y = -3 + mouseX / window.innerWidth * 3;
    object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
   }
   renderer.render(scene.camera);
 }

 window.addEventListener("resize", function (){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updataProjectionMatrix();
    renderer.setSize(window.innerWidth / window.innerHeight);
 })

 animate();

