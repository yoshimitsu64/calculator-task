import HomeFCPAGE from "./pages/HomeFCPage";
import { StyledApp } from "./App.styled";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./assets/themes";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary";
import HomeCCPAGE from "./pages/HomeCCPage";
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <StyledApp>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomeFCPAGE />}/>
            <Route path="HOMECC" element={<HomeCCPAGE />}/>
          </Routes>
        </ErrorBoundary>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
