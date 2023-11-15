import { extendTheme } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

export const darkTheme = {
  accentColor: "#3d7ab2",
  primaryColor: "#000000",
  secondaryColor: "#fff",
};

export const lightTheme = {
  accentColor: "#3d7ab2",
  primaryColor: "#000000",
  secondaryColor: "#fff",
};

const customTheme = extendTheme({
  semanticTokens: {
    colors: {
      error: "red.500",
      text: {
        default: lightTheme.secondaryColor,
        _dark: darkTheme.secondaryColor,
      },
      accent: {
        default: lightTheme.accentColor,
        _dark: darkTheme.accentColor,
      },
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: darkTheme.secondaryColor,
        bg: darkTheme.primaryColor,
      },
      "*::placeholder": {
        color: "",
      },
      "*, *::before, &::after": {
        borderColor: "",
      },
    }),
  },
  fonts: {
    heading: `'montserrat', sans-serif`,
    body: `'montserrat', sans-serif`,
  },
  components: {
    Text: {
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
      },
    },
    Link: {
      _hover: {
        borderColor: "#0634B5",
        backgroundColor: "#0634B5",
      },
    },
  },
});

export default customTheme;
