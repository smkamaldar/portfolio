import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { cyan, purple } from "@mui/material/colors";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks/index";

import "normalize.css";
import "./app.css";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: purple[900],
    },
  },
});

const handleThemeClick = () => {};
const handleMenuClick = () => {};

function App() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <SocialLinks />
        <ProfileImage />
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
