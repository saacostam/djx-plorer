import { Actor } from "../actor";

export class Stage {
    actors: Actor[] = [];

    onStageMount() {}
    onStageDismount() {}

    update() {
        this.actors.forEach(actor => actor.update());
        this.actors = this.actors.filter(actor => actor.isAlive);
    }
}
