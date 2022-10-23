import HomeFCPAGE from "./pages/HomeFCPage";
import { StyledApp } from "./App.styled";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./assets/themes";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <StyledApp>
        <Routes>
          <Route path='/' element={<HomeFCPAGE/>}/>
        </Routes>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
