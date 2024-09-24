import { Cameraka, Reconciler } from "../../visual/volumeme";
import { Stage } from "../stage";

export interface AppOptions {
    reconciler: Reconciler;
    cameraka: Cameraka;
}

export class App {
    public static DEFAULT = {
        STAGE_KEY: 'main',
    };

    public stages = new Map<string, Stage>();
    public currentStage: Stage;
    public cameraka: Cameraka;

    private reconciler: Reconciler;

    constructor({
        reconciler,
        cameraka,
    }: AppOptions) {
        this.reconciler = reconciler;
        this.cameraka = cameraka;

        this.currentStage = new Stage();
        this.stages.set(App.DEFAULT.STAGE_KEY, this.currentStage);
    }

    registerStage(name: string, stage: Stage) {
        this.stages.set(name, stage);
    }

    switchToStage(name: string) {
        if (this.currentStage) this.currentStage.onStageDismount();

        if (this.stages.has(name)) {
            this.currentStage = this.stages.get(name)!;
            this.currentStage.onStageMount();
        }
    }

    update() {
        this.currentStage.update();
    }

    draw() {
        this.reconciler.draw(this.currentStage, this.cameraka);
    }
}
