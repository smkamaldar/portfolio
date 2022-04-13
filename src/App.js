import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { cyan, teal } from "@mui/material/colors";
import Footer from "./components/Footer";

import "normalize.css";
import "./app.css";

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
    secondary: {
      main: teal[900],
    },
  },
});

const handleThemeClick = () => {};
const handleMenuClick = () => {};

function App() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Footer
          name="Elmira"
          onThemeClick={handleThemeClick}
          onMenuClick={handleMenuClick}
        />
      </ThemeProvider>
    </main>
  );
}

export default App;
