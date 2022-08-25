import cn from "classnames";
import styles from "./UIButton.module.css";
import "./index.css";

const UIButton = ({ text, onClick, disabled, theme = "dark" }) => {
  return (
    <>
      {" "}
      <button
        onClick={onClick}
        disabled={disabled}
        className={cn(styles.button, styles[theme])}
      >
        {text}
      </button>
    </>
  );
};

export default UIButton;
