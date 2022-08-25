import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Favorite from "../Favorite/Favorite";
import styles from "./Header.module.css";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "../../context/ThemeProvider";
import imgDroid from "./img/droid.svg";
import imgLightsaber from "./img/lightsaber.svg";
import imgSpaceStation from "./img/space-station.svg";

const Header = () => {
  //в зависимости от темы меняем иконку
  const [icon, setIcon] = useState(imgSpaceStation);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightsaber);
        break;
      case THEME_DARK:
        setIcon(imgSpaceStation);
        break;
      case THEME_NEITRAL:
        setIcon(imgDroid);
        break;
      default:
        setIcon(imgSpaceStation);
    }
  }, [isTheme]);
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="icon" />
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/not-found" exact>
            Not Found
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" exact>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/fail" exact>
            Fail
          </NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
