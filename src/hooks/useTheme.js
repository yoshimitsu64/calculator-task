import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { lightTheme, darkTheme } from "@constants/theme";

import { selectIsDarkTheme } from "@selectors/themeSelectors";

export function useTheme() {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const [appTheme, setAppTheme] = useState(lightTheme);

  useEffect(() => {
    localStorage.setItem(
      "theme",
      isDarkTheme ? JSON.stringify(darkTheme) : JSON.stringify(lightTheme),
    );
    setAppTheme(JSON.parse(localStorage.getItem("theme")));
  }, [isDarkTheme]);

  return appTheme;
}
