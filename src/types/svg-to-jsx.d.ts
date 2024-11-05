/** Provides type for svg-to-jsx package. */

declare module "svg-to-jsx" {
  /**
   * Converts an SVG string to a JSX-compatible string.
   * @param svg The SVG string to convert.
   * @returns A Promise that resolves with the converted JSX string.
   */
  function svgToJsx(svg: string): Promise<string>;

  export default svgToJsx;
}
