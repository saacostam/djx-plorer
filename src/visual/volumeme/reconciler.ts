import { Stage } from "../../logic/stage";


export interface Reconciler {
    draw: (stage: Stage) => void
}
