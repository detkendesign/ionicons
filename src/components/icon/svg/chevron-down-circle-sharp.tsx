import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ChevronDownCircleSharp = forwardRef<
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
      <path d="M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48 48 141.13 48 256s93.13 208 208 208zm-96-270.63l96 96 96-96L374.63 216 256 334.63 137.37 216z" />
    </svg>
  );
});

ChevronDownCircleSharp.displayName = "ChevronDownCircleSharp";
