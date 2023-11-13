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
      variant: {
        highlight: {
          color: "#ff0000",
        },
      },
    },
    Button: {
      // 1. We can update the base styles
      /* baseStyle: {
            fontWeight: 'bold', // Normally, it is "semibold"
          }, */
      // 2. We can add a new button size or extend existing
      /* sizes: {
            xl: {
              h: '56px',
              fontSize: 'lg',
              px: '32px',
            },
          }, */
      // 3. We can add a new visual variant
      variants: {
        /* 'with-shadow': {
              bg: 'red.400',
              boxShadow: '0 0 2px 2px #efdfde',
            }, */
        // 4. We can override existing variants
        outline: {
          width: "140px",
          borderColor: "#2962FF",
          color: "#2962FF",
          _hover: {
            borderColor: "#0634B5",
            color: "#0634B5",
          },
        },
        /* primary: (props: StyleFunctionProps) => ({
              bgColor: props.borderColor === "#2962FF"? 'red.300' : 'red.500',
              color: props.color === "#2962FF"? 'red.300' : 'red.500'
            }), */
        primary: {
          width: "140px",
          bgColor: "#2962FF",
          _hover: {
            bgColor: "#0634B5",
          },
        },
        /* outline: {
              borderColor="#2962FF",
              color="#2962FF"
            } */
        /* (props: StyleFunctionProps) => ({
              bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
            }), */
        // 5. We can add responsive variants
        sm: {
          bg: "teal.500",
          fontSize: "md",
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        /* size: 'lg', */ // default is md
        /* variant: 'sm', */ // default is solid
        // colorScheme: 'green', // default is gray
        _hover: {
          color: "#0634B5",
        },
      },
    },
  },
});

export default customTheme;
