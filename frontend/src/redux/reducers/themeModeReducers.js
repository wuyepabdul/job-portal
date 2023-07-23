import { THEME_MODE } from "../constants/themeModeConstants";

export const themeModeReducer = (state = { toggleActive: false }, action) => {
  switch (action.type) {
    case THEME_MODE:
      return {
        ...state,
        toggleActive: !state.toggleActive,
        mode: state.toggleActive ? "light" : "dark",
      };
    default:
      return state;
  }
};
