import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import { StyledApp } from "./App.styled";
import Header from "@components/header";

const HomeFCPAGE = lazy(() => import("@pages/HomeFCPage"));
const HomeCCPAGE = lazy(() => import("@pages/HomeCCPage"));
const SettingsPage = lazy(() => import("@pages/SettingsPage"));

function App(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <StyledApp data-cypress="app">
        <Header />
        <Suspense>
          <Routes fallback={<h1>Page is loading</h1>}>
            <Route path="/" element={<HomeFCPAGE />} />
            <Route path="/HOMECC" element={<HomeCCPAGE />} />
            <Route path="/Settings" element={<SettingsPage />} />
          </Routes>
        </Suspense>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
