import { THEME_MODE } from "../constants/themeModeConstants";

export const themeModeAction = () => (dispatch) => {
  dispatch({ type: THEME_MODE });
};
