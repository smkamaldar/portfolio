import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { cyan, deepPurple, grey } from "@mui/material/colors";

import Hero from "./sections/Hero";
import Footer from "./components/Footer";

import "normalize.css";
import "./app.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: grey[900],
    },
  },
});

const handleThemeClick = () => {};
const handleMenuClick = () => {};

function App() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Hero />
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
