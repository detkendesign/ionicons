import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const TabletPortraitSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M430 0H82a18 18 0 00-18 18v476a18 18 0 0018 18h348a18 18 0 0018-18V18a18 18 0 00-18-18zM100 448V64h312v384z" />
      </svg>
    );
  },
);

TabletPortraitSharp.displayName = "TabletPortraitSharp";
