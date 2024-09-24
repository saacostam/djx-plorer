import { Stage } from "../../logic/stage";
import { Cameraka } from "./cameraka";

export interface Reconciler {
    draw: (stage: Stage, camaraka: Cameraka) => void;
}
