import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Favorite.module.css";
import icon from "./img/bookmark.svg";
import { useEffect, useState } from "react";
//определяем ключи (то есть идинтификаторы) в сторе и определяем длину. т.е находим кол-во персонажей в избранном которое передаем в setcount
//теперь когда добавл или удаляем  персонажа в или из избранного счетчик меняется
const Favorite = () => {
  const [count, setCount] = useState();
  const storeDate = useSelector((state) => state.favouriteReducer);

  useEffect(() => {
    const len = Object.keys(storeDate).length; //здесь получаем массив с ключами и у массива определ длину

    setCount(len);
  });

  return (
    <div className={styles.container}>
      <Link to="/favourites">
        <span className={styles.counter}>{count}</span>
        <img className={styles.icon} src={icon} alt="Favorites" />
      </Link>
    </div>
  );
};

export default Favorite;
