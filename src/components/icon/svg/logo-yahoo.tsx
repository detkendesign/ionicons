import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const LogoYahoo = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M0 139.009h97.648l56.86 145.729 57.6-145.729h95.066L164.022 484H68.337l39.189-91.417L.003 139.009H0zM417.5 256H311l94.907-228L512 28.005 417.5 256zm-78.208 21.221c32.672 0 59.156 26.533 59.156 59.258 0 32.727-26.484 59.26-59.156 59.26-32.667 0-59.146-26.533-59.146-59.26 0-32.725 26.483-59.258 59.146-59.258z" />
      </svg>
    );
  },
);

LogoYahoo.displayName = "LogoYahoo";
