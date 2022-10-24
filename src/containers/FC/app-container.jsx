import { useState } from "react";
import { useSelector } from "react-redux";
import App from "../../App";
import { darkTheme, lightTheme } from "../../assets/themes";

function AppContainer() {
  const isDarkTheme = useSelector((state) => state.isDarkTheme);
  return <App theme={isDarkTheme ? darkTheme : lightTheme} />;
}

export default AppContainer;
