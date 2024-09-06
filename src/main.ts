import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';

import { getOrCreateAppWrapper } from './visual/app';
import { createCanvas } from "./visual/canvas";
import { getNodeMesh } from './visual/threejs';

const appWrapper = getOrCreateAppWrapper();
const canvas = createCanvas();

const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new WebGLRenderer({ canvas: canvas });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
appWrapper.appendChild( renderer.domElement );

const node = getNodeMesh();
scene.add( node );

camera.position.z = 5;

function animate() {
	node.rotation.x += 0.01;
	node.rotation.y += 0.01;

	renderer.render( scene, camera );
}
