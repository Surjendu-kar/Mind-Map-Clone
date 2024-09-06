import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  spacing: 10,
  palette: {
    primary: {
      main: "#2872fa",
    },
    secondary: {
      main: "#fa2871",
    },
    text: {
      primary: "#1d1d1d",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#ffffff",
        },
      },
    },
  },
});

export default theme;
