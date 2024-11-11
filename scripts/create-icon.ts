import path from "path";
import fs from "fs";
import svgToJsx from "svg-to-jsx";
import ionicons from "ionicons/dist/ionicons.web-types.json" assert { type: "json" };
import { fileURLToPath } from "url";
import prettier from "prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconList = ionicons.contributions.html.ionicons;

const rootDir = path.join(__dirname, "..");
const __directory = "src/components/icon/svg";
const dir = path.join(rootDir, __directory);
const resolverPath = path.join(rootDir, "src/components/icon/resolver.ts");

fs.mkdirSync(dir, { recursive: true });

const upperCamelCase = (...args: string[]) => {
  return args
    .join(" ")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
};

const prettierConfig = {
  parser: "typescript",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  printWidth: 80,
  trailingComma: "all",
} as const;

const createElement = async (name: string, node: unknown) => {
  const componentName = upperCamelCase(name);

  const jsxString = await svgToJsx(node as string);

  /** Gets the key property, if its available use it or defaults to size. */
  const size = (key: string) => `${key} ?? size`;

  const element = `
    import { forwardRef } from "react";
    import { type DefaultIconProps } from "../types.js";

    export const ${componentName} = forwardRef<SVGSVGElement, DefaultIconProps>(
      ({ width, size, height, ...props }, ref) => {

        return (
          ${jsxString.replace(
            /<svg([^>]*)>/,
            `<svg$1 width={${size("width")}} height={${size("height")}} ref={ref} {...props}>`,
          )}
        );
      }
    );

    ${componentName}.displayName = "${componentName}";
`;

  const formattedElement = await prettier.format(element, prettierConfig);

  return formattedElement;
};

const allIcons = iconList
  .map((icon) => `['${icon.name}']: ${upperCamelCase(icon.name)}`)
  .join(", ");

const createImportStatement = (name: string) => {
  return `import { ${upperCamelCase(name)} } from "./svg/${name}.js";`;
};

const generateIcon = async () => {
  const iconImports: string[] = [];

  for (const icon of iconList) {
    const iconLocation = path.join(rootDir, __directory, `${icon.name}.tsx`);

    try {
      const node = fs.readFileSync(
        `${rootDir}/node_modules/ionicons/${icon.icon}`,
      );
      const element = await createElement(icon.name, node);

      fs.writeFileSync(iconLocation, element, "utf-8");

      // Append import to resolver
      const importStatement = createImportStatement(icon.name);
      iconImports.push(importStatement);
    } catch (error) {
      console.error(`Error processing icon ${icon.name}:`, error);
    }
  }

  return iconImports;
};

const processIcons = async () => {
  const iconImports = await generateIcon();

  const resolverText = `
  ${iconImports.join("\n")}

  export const Icons = {${allIcons}}

  export type IconKeys = keyof typeof Icons
  `;

  const formattedResolver = await prettier.format(resolverText, prettierConfig);
  fs.writeFileSync(resolverPath, formattedResolver, "utf-8");

  console.log(formattedResolver);
};

processIcons();
