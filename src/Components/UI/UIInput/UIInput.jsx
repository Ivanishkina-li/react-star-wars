import styles from "./UIInput.module.css";
import cn from "classnames";
import icon from "./img/cancel.svg";
const UIInput = ({ handleInputChange, value, placeholder, classes }) => (
  <div className={cn(styles.wrapper__input, classes)}>
    <input
      type="text"
      value={value}
      onChange={(e) => handleInputChange(e.target.value)}
      placeholder={placeholder}
      className={styles.input}
    />
    <img
      onClick={() => value && handleInputChange("")}
      src={icon}
      alt="clear"
      className={cn(styles.clear, !value && styles.clear__disabled)}
    />
  </div>
);

//когда в инпуте есть какое-то value то мы можем очистить поле (крестик активный) и наоборот
//если в компоненте не будет логики мы можем опускать return и фиг скобки и использовать круг скобки

export default UIInput;
