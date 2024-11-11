import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ArrowDownRightBox = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M480 331.636V464c0 4.243-1.686 8.313-4.686 11.314A16.004 16.004 0 01464 480H331.636c-8.836 0-16-7.163-16-16s7.164-16 16-16h93.737l-51.128-51.128a58.521 58.521 0 0022.663-22.591L448 425.373v-93.737c0-8.836 7.163-16 16-16s16 7.164 16 16zm-83.092 42.645a58.543 58.543 0 007.456-28.59V90.546A58.547 58.547 0 00345.818 32H90.545A58.546 58.546 0 0032 90.546v255.272a58.545 58.545 0 0058.545 58.546h255.273c.808 0 1.602-.06 2.378-.176a58.544 58.544 0 0026.049-7.316L204.686 227.314c-6.248-6.249-6.248-16.379 0-22.628 6.249-6.248 16.379-6.248 22.628 0l169.594 169.595z"
          fillRule="evenodd"
        />
      </svg>
    );
  },
);

ArrowDownRightBox.displayName = "ArrowDownRightBox";