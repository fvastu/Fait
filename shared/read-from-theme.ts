import customTheme from "../styles/theme";

export const readColorFromTheme = (key: "accent") => {
  const entry = customTheme.semanticTokens.colors;
  if (!entry) return undefined;
  if (!entry[key]) return undefined;
  return entry[key];
};
