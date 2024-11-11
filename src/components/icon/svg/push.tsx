import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const Push = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M376 352H272V198.63l52.69 52.68a16 16 0 0022.62-22.62l-80-80a16 16 0 00-22.62 0l-80 80a16 16 0 0022.62 22.62L240 198.63V352H136a56.06 56.06 0 01-56-56V88a56.06 56.06 0 0156-56h240a56.06 56.06 0 0156 56v208a56.06 56.06 0 01-56 56zM272 464a16 16 0 01-32 0V352h32z" />
      </svg>
    );
  },
);

Push.displayName = "Push";
