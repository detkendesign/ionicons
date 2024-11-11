import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const CellularSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M496 432h-96V80h96zM368 432h-96V160h96zM240 432h-96V224h96zM112 432H16V288h96z" />
      </svg>
    );
  },
);

CellularSharp.displayName = "CellularSharp";
