import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PlaySkipBackCircleSharp = forwardRef<
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
      <path d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48 48 141.31 48 256zm128-80h32v69l128-77.53v176.9L208 267v69h-32z" />
    </svg>
  );
});

PlaySkipBackCircleSharp.displayName = "PlaySkipBackCircleSharp";
