import { ThemeOptions, createTheme } from "@mui/material/styles";
import { componentsTheme } from "./components";
import { typographyTheme } from "./typography";
import { paletteTheme } from "./pallette";
import { zIndexTheme } from "./zIndex";



const themeOptions: ThemeOptions = {
    components: componentsTheme.components,
    palette: paletteTheme,
    typography: typographyTheme.typography,
    zIndex: zIndexTheme.zIndex,
};

export const theme = createTheme(themeOptions);