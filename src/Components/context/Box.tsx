// use the theme style with context
// step 3
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="textContextStyle" id="box_style"
      style={{ backgroundColor: theme.secondary.main, color: theme.primary.text }}
    >
      Theme context box
    </div>
  );
};
