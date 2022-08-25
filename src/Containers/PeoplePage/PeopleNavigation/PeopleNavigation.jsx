import styles from "./PeopleNavigation.module.css";
import { Link } from "react-router-dom";
import UIButton from "../../../Components/UI/UIButton";
const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
  //то есть передаем туда то на что хотим поменять (на сл или предыд страницу)
  const handleChangeNext = () => {
    getResource(nextPage);
  };
  const handleChangePrev = () => {
    getResource(prevPage);
  };

  // когда мы на 1ой странице в консоли в объекте response  видим что previous: null. тогда мы дизеблем кнопку previous

  return (
    <div className={styles.container}>
      <Link to={`/people/?page=${counterPage - 1}`} className={styles.buttons}>
        <UIButton
          text="previous"
          onClick={handleChangePrev}
          disabled={!prevPage}
          theme="light"
        />
      </Link>
      <Link to={`/people/?page=${counterPage + 1}`} className={styles.buttons}>
        <UIButton text="next" onClick={handleChangeNext} disabled={!nextPage} />
      </Link>
    </div>
  );
};

export default PeopleNavigation;
