import { useState } from "react";
import { useEffect } from "react";
import cn from "classnames";
import styles from "./UIloading.module.css";
import loaderWhite from "./img/loader-white.svg";
import loaderBlack from "./img/loader-black.svg";
import loaderBlue from "./img/loader-blue.svg";
const UIloading = ({ theme = "white", isShadow = true, classes }) => {
  const [loaderIcon, setLoaderIcon] = useState(null);

  useEffect(() => {
    switch (theme) {
      case "black":
        setLoaderIcon(loaderBlack);
        break;
      case "white":
        setLoaderIcon(loaderWhite);
        break;
      case "blue":
        setLoaderIcon(loaderBlue);
        break;
      default:
        setLoaderIcon(loaderBlack);
    }
  }, []);

  return (
    <img
      className={cn(styles.loader, isShadow && styles.shadow, classes)}
      src={loaderIcon}
      alt="Loader"
    />
  );
};

export default UIloading;
