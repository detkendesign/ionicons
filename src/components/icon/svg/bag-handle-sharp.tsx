import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const BagHandleSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm188 91a112 112 0 01-224 0v-32h32v32a80 80 0 00160 0v-32h32z" />
      </svg>
    );
  },
);

BagHandleSharp.displayName = "BagHandleSharp";
