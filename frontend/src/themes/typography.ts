import { createTheme } from "@mui/material/styles";

// const headerFontFamily: string[] = ["Funnel Sans", "sans-serif"];
const headerFontFamily: string[] = ["Nunito", "sans-serif"];

export const typographyTheme = createTheme({
    typography: {
        fontFamily: headerFontFamily.join(","),
        fontSize: 12,
        h1: {
          fontFamily: headerFontFamily.join(","),
          fontSize: 36,
          fontWeight: 600
        },
        h2: {
          fontFamily: headerFontFamily.join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: headerFontFamily.join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: headerFontFamily.join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: headerFontFamily.join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: headerFontFamily.join(","),
          fontSize: 14,
        },
      },
});