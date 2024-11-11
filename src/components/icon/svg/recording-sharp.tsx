import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const RecordingSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M384 138a117.93 117.93 0 00-91.84 192h-72.32A118 118 0 10128 374h256a118 118 0 000-236zM54 256a74 74 0 1174 74 74.09 74.09 0 01-74-74zm330 74a74 74 0 1174-74 74.09 74.09 0 01-74 74z" />
      </svg>
    );
  },
);

RecordingSharp.displayName = "RecordingSharp";
