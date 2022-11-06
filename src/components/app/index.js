import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"

import { ThemeProvider } from "styled-components"

import { useTheme } from "@hooks/useTheme"

import Header from "@components/header"
import { routes } from "@constants/routes"
import { theme } from "@constants/theme"
import Layout from "@components/layout"

function App() {
  const appTheme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={appTheme}>
        <Layout>
          <Header />
          <Suspense fallback={<h1>Page is loading</h1>}>
            <Routes>
              {routes.map(({ path, component, id }) => (
                <Route path={path} element={component} key={id} />
              ))}
            </Routes>
          </Suspense>
        </Layout>
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default App
