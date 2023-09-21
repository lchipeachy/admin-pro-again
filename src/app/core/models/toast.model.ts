import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { AlertColor } from "./color.model";

export interface Toast {
    color: AlertColor;
    message: string;
    icon: IconDefinition;
}
