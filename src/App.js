import * as React from "react";
import { useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { cyan, deepPurple, grey } from "@mui/material/colors";

import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import About from "./sections/About";
import Skills from "./sections/Skills";

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

function App() {
  const [open, setOpen] = useState(false);

  const handleThemeClick = () => {};

  return (
    <ThemeProvider theme={theme}>
      <main style={{ height: "90vh", overflowY: "scroll" }}>
        <Hero />
        <About />
        <Skills />
        <Menu open={open} onClose={() => setOpen(false)} />
      </main>
      <Footer
        name="Elmira"
        onThemeClick={handleThemeClick}
        onMenuClick={() => setOpen(true)}
      />
    </ThemeProvider>
  );
}

export default App;
