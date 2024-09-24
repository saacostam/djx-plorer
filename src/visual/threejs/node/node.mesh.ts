import { Mesh, MeshBasicMaterial, SphereGeometry } from "three";

export interface GetNodeMeshOptions{
    radius?: number;
    color?: string;
}

export function getNodeMesh({
    radius,
    color,
}: GetNodeMeshOptions = {}): Mesh{
    const sphereGeometry = new SphereGeometry(radius || 1, 6, 6);
    const material = new MeshBasicMaterial( { color: color || 'blue' } );

    return new Mesh( sphereGeometry, material );
}
