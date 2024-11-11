import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const BeakerSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M453.55 54.7L464 32H128.4c-27.74 0-49 6.57-63.31 19.51C54.39 61.27 48 74.89 48 88v24h16c31 0 32 16.79 32 35v313a20 20 0 0020 20h312a20 20 0 0020-20V96c0-17.16 2.28-34.14 5.55-41.3zM416 96v64H128v-22c0-36.15-21-51-41.77-53.46C89 70 105.7 64.05 128.4 64.05h289.92A221.83 221.83 0 00416 96z" />
      </svg>
    );
  },
);

BeakerSharp.displayName = "BeakerSharp";
