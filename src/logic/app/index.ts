import { Reconciler } from "../../visual/volumeme";
import { Stage } from "../stage";

export interface AppOptions {
    reconciler: Reconciler;
}

export class App {
    public static DEFAULT = {
        STAGE_KEY: 'main',
    };

    public stages = new Map<string, Stage>();
    public currentStage: Stage;

    private reconciler: Reconciler;

    constructor({
        reconciler,
    }: AppOptions) {
        this.reconciler = reconciler;
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
        this.reconciler.draw(this.currentStage);
    }
}
