import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const GiftSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path
          d="M346 110a34 34 0 00-68 0v34h34a34 34 0 0034-34zM234 110a34 34 0 10-34 34h34z"
          fill="none"
        />
        <path d="M234 144h44v112h164a22 22 0 0022-22v-68a22 22 0 00-22-22h-59.82A77.95 77.95 0 00256 55.79 78 78 0 00129.81 144H70a22 22 0 00-22 22v68a22 22 0 0022 22h164zm44-34a34 34 0 1134 34h-34zm-112 0a34 34 0 1168 0v34h-34a34 34 0 01-34-34zM278 480h132a22 22 0 0022-22V288H278zM80 458a22 22 0 0022 22h132V288H80z" />
      </svg>
    );
  },
);

GiftSharp.displayName = "GiftSharp";
