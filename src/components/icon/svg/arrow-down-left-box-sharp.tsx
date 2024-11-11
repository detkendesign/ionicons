import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ArrowDownLeftBoxSharp = forwardRef<
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
      <path
        d="M32 480V315.636h32v109.737l43.636-43.637v22.628h22.628L86.627 448h109.737v32H32zm286.628-264L130.264 404.364H480V32H107.636v349.736L296 193.373 318.628 216z"
        fillRule="evenodd"
      />
    </svg>
  );
});

ArrowDownLeftBoxSharp.displayName = "ArrowDownLeftBoxSharp";
