import { TOOGLE_THEME } from "@types/themeTypes";

export function toogleTheme(payload) {
  return {
    type: TOOGLE_THEME,
    payload: payload,
  };
}
