import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const AlbumsSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M128 64h256v32H128zM96 112h320v32H96zM464 448H48V160h416z" />
      </svg>
    );
  },
);

AlbumsSharp.displayName = "AlbumsSharp";
