import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const QrCodeOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <rect height="80" width="80" rx="8" ry="8" x="336" y="336" />
        <rect height="64" width="64" rx="8" ry="8" x="272" y="272" />
        <rect height="64" width="64" rx="8" ry="8" x="416" y="416" />
        <rect height="48" width="48" rx="8" ry="8" x="432" y="272" />
        <rect height="48" width="48" rx="8" ry="8" x="272" y="432" />
        <rect height="80" width="80" rx="8" ry="8" x="336" y="96" />
        <rect
          height="176"
          width="176"
          fill="none"
          rx="16"
          ry="16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="288"
          y="48"
        />
        <rect height="80" width="80" rx="8" ry="8" x="96" y="96" />
        <rect
          height="176"
          width="176"
          fill="none"
          rx="16"
          ry="16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="48"
          y="48"
        />
        <rect height="80" width="80" rx="8" ry="8" x="96" y="336" />
        <rect
          height="176"
          width="176"
          fill="none"
          rx="16"
          ry="16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="48"
          y="288"
        />
      </svg>
    );
  },
);

QrCodeOutline.displayName = "QrCodeOutline";
