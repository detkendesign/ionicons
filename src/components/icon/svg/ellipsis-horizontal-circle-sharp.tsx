import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const EllipsisHorizontalCircleSharp = forwardRef<
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
      <path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm-90 234a26 26 0 1126-26 26 26 0 01-26 26zm90 0a26 26 0 1126-26 26 26 0 01-26 26zm90 0a26 26 0 1126-26 26 26 0 01-26 26z" />
    </svg>
  );
});

EllipsisHorizontalCircleSharp.displayName = "EllipsisHorizontalCircleSharp";
