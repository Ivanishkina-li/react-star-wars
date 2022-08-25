import styles from "./SearchPageInfo.module.css";
import { Link } from "react-router-dom";
const SearchPageInfo = ({ people }) => (
  <>
    {people.length ? (
      <ul className={styles.list__container}>
        {people.map(({ id, name, img }) => (
          <li className={styles.list__item} key={id}>
            <Link to={`/people/${id}`}>
              <img className={styles.person__photo} src={img} alt={name} />
              <p className={styles.person__name}>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <h2 className={styles.person__comment}>No results</h2>
    )}
  </>
);

//с помощью Link можем сразу перейти по ссылке на  персонажа нажав на него например
export default SearchPageInfo;
