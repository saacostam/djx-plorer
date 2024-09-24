import { Camera, Mesh, MeshBasicMaterial, Object3D, Object3DEventMap, Scene, Vector3 } from "three";
import { Stage } from "../../../logic/stage";
import { Reconciler } from "../../volumeme";
import { Cameraka } from "../../volumeme/cameraka";
import { getNodeMesh } from "../node";
import * as IdUtil from "../../../utils/id-generation";

export interface ThreeJsReconciler {
    scene: Scene;
    camera: Camera;
}

export class ThreeJsReconciler implements Reconciler {
    scene: Scene;
    camera: Camera;

    constructor({
        scene,
        camera,
    }: ThreeJsReconciler){
        this.scene = scene;
        this.camera = camera;
    }

    draw(stage: Stage, cameraka: Cameraka) {
        const unmatchedSceneObjects = this.matchSceneObjectsWithStage(this.scene.children, stage);
        unmatchedSceneObjects.forEach(obj => this.scene.remove(obj));

        this.camera.position.set(cameraka.x, cameraka.y, cameraka.z);
        this.camera.lookAt(new Vector3(
            cameraka.lookAt.x,
            cameraka.lookAt.y,
            cameraka.lookAt.z,
        ));
    }

    matchSceneObjectsWithStage(sceneObjects: Object3D<Object3DEventMap>[], stage: Stage): Object3D<Object3DEventMap>[] {
        // Keep a list of scene objects that have not corresponding actor volumeme
        // We asume they are all unmatched for now; but we remove them as we find a match for each object
        let unmatchedSceneObjects = [...sceneObjects];

        for (let i = 0; i < stage.actors.length; i++) {
            const actor = stage.actors[i];

            const sceneObject = this.scene.getObjectByName(actor.volumeme.namifier);
            if (sceneObject ) {
                // Remove scene object from list, as a match was found
                // TODO: Test if clean up can be done a bit more efficient; without filter
                unmatchedSceneObjects = unmatchedSceneObjects.filter(({ name }) => name !== sceneObject.name);

                if (sceneObject instanceof Mesh) {
                    sceneObject.position.set(actor.volumeme.x, actor.volumeme.y, actor.volumeme.z);
                    if (sceneObject.material instanceof MeshBasicMaterial) {
                        sceneObject.material.color.set(actor.volumeme.color);
                    }
                }
            } else {
                // If a match was not found; but the actor volumeme is defined then we create the object and add it to the scene
                const newObject = getNodeMesh({
                    radius: actor.volumeme.radius,
                    color: actor.volumeme.color,
                });

                newObject.name = IdUtil.generateRandomId();
                this.scene.add(newObject)
            }
        }

        return unmatchedSceneObjects;
    }
}
