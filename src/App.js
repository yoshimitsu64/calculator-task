import HomeFCPAGE from "./pages/HomeFCPage";
import { StyledApp } from "./App.styled";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary";
import HomeCCPAGE from "./pages/HomeCCPage";
import SettingsPage from "./pages/SettingsPage";
import Header from "@components/header";

function App(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <StyledApp data-cypress="app">
        <Header />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomeFCPAGE />} />
            <Route path="/HOMECC" element={<HomeCCPAGE />} />
            <Route path="/Settings" element={<SettingsPage />} />
          </Routes>
        </ErrorBoundary>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
