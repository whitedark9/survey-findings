import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";
import Blockquote from "~/ui/blockquote";

// Get the default MDX components
const themeComponents = getThemeComponents({
  blockquote: Blockquote,
});

// Merge components
export function useMDXComponents(components?: any) {
  return {
    ...themeComponents,
    ...components,
  };
}
