import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const CropSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
  ({ width, size, height, ...props }, ref) => {
    return (
      <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? size}
        height={height ?? size}
        ref={ref}
        {...props}
      >
        <path d="M166 346V32h-44v90H32v44h90v224h224v90h44v-90h90v-44H166z" />
        <path d="M346 320h44V122H192v44h154v154z" />
      </svg>
    );
  },
);

CropSharp.displayName = "CropSharp";
