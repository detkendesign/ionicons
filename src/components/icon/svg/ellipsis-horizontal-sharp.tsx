import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const EllipsisHorizontalSharp = forwardRef<
  SVGSVGElement,
  DefaultIconProps
>(({ width, size, height, ...props }, ref) => {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? size}
      height={height ?? size}
      ref={ref}
      {...props}
    >
      <circle cx="256" cy="256" r="48" />
      <circle cx="416" cy="256" r="48" />
      <circle cx="96" cy="256" r="48" />
    </svg>
  );
});

EllipsisHorizontalSharp.displayName = "EllipsisHorizontalSharp";
