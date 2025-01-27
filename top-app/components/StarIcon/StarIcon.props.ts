import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface StarIconProps
  extends DetailedHTMLProps<HTMLAttributes<SVGElement>, SVGElement> {
  isEditable: boolean;
}
