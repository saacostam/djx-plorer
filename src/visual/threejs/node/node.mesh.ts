import { Mesh, MeshBasicMaterial, SphereGeometry } from "three";

export function getNodeMesh(): Mesh{
    const sphereGeometry = new SphereGeometry(1, 6, 6);
    const material = new MeshBasicMaterial( { color: 'blue' } );

    return new Mesh( sphereGeometry, material );
}
