import { useLocation } from "react-router";
import styles from "./NotFoundPage.module.css";
import img from "./img/not-found.jpg";

const NotFoundPage = () => {
  let location = useLocation();
  return (
    <>
      <img className={styles.img} src={img} alt="not found" />
      <p className={styles.text}>
        No match for <u>{location.pathname}</u>
      </p>
    </>
  );
};

export default NotFoundPage;
