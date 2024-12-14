import { createTheme } from "@mui/material/styles";

export const componentsTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {                
                root: ({ theme }) =>
                theme.unstable_sx({
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                    paddingX: 2,
                    paddingY: 1, 
                    fontSize: "12px"                   
                }),
            }
        }
    }
});