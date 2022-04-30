import * as React from "react";
import { useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, grey } from "@mui/material/colors";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import Link from "@mui/material/Link";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Menu from "./components/Menu";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Footer from "./components/Footer";

import "normalize.css";
import "./app.scss";

function App() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("light");

  let fontColor = mode === "light" ? "black" : "white";
  const getTheme = (mode) => {
    return {
      typography: {
        h4: {
          color: fontColor,
        },
        subtitle1: {
          color: fontColor,
        },
        body1: {
          color: fontColor,
        },
      },
      palette: {
        mode,
        ...(mode === "light"
          ? {
              primary: {
                main: deepPurple[500],
              },
              secondary: {
                main: grey[900],
              },
            }
          : {
              primary: {
                main: deepPurple[700],
              },
              secondary: {
                main: grey[500],
              },
            }),
      },
    };
  };

  const theme = createTheme(getTheme(mode));

  const handleThemeClick = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar onThemeClick={handleThemeClick} />
      <main
        style={{
          height: "90vh",
        }}
      >
        <Hero />
        <About />
        <Skills />
        <Menu open={open} onClose={() => setOpen(false)} />
        <Link
          className="upArrow"
          href="#hero"
          color={theme.palette.primary.main}
        >
          <ArrowUpwardRoundedIcon />
        </Link>
      </main>
      <Footer
        style={{ backgroundColor: theme.palette.background.default }}
        name="Elmira"
        onThemeClick={handleThemeClick}
        onMenuClick={() => setOpen(true)}
      />
    </ThemeProvider>
  );
}

export default App;
