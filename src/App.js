import { Routes, Route } from "react-router-dom"
import { Suspense, useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { ThemeProvider } from "styled-components"

import Header from "@components/header"
import { routes } from "@constants/routes"
import { theme, lightTheme, darkTheme } from "@constants/theme"
import Layout from "@components/layout"

function App() {
  const isDarkTheme = useSelector((state) => state?.isDarkTheme)
  const [appTheme, setAppTheme] = useState(lightTheme)
  useEffect(() => {
    localStorage.setItem(
      "theme",
      isDarkTheme ? JSON.stringify(darkTheme) : JSON.stringify(lightTheme),
    )
    setAppTheme(JSON.parse(localStorage.getItem("theme")))
  }, [isDarkTheme])

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
