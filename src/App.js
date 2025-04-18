import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import NotFound from "./pages/NotFound";
// import Navbar from "./components/Navbar";

function App() {
  return (
      <ThemeProvider theme={theme}>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
          {/*<Route path="/about" element={<About />} />*/}
          {/*<Route path="/projects" element={<Projects />} />*/}
          {/*<Route path="*" element={<NotFound />} />*/}
      </Routes>
    </Router>
      </ThemeProvider>
  );
}

export default App;
