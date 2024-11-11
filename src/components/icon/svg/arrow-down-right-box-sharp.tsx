import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ArrowDownRightBoxSharp = forwardRef<
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
        d="M480 480H315.636v-32h109.737l-43.637-43.636h22.628v-22.628L448 425.372V315.636h32V480zM216 193.372l188.364 188.364V32H32v372.364h349.736L193.373 216 216 193.372z"
        fillRule="evenodd"
      />
    </svg>
  );
});

ArrowDownRightBoxSharp.displayName = "ArrowDownRightBoxSharp";
