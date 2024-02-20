import React from "react";
import { ThemeProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from "@/utils/theme";
import "../src/styles/global.css";
import "../src/styles/responsive.css"
import Footer from "@/Components/Footer";
function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
     
    </ThemeProvider>
  )
}
export default App