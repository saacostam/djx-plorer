import { Volumeme } from '../../visual/volumeme';

export interface ActorOptions {
    volumeme: Volumeme;
}

export class Actor {
    public volumeme: Volumeme;

    constructor({
        volumeme,
    }: ActorOptions) {
        this.volumeme = volumeme;
    }

    public isAlive = true;

    update() {}
    kill() {
        this.isAlive = false;
    }
}
