import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./FavouritesPage.module.css";
import PeopleList from "../../Components/PeoplePage/PeopleList/PeopleList";
const FavouritesPage = () => {
  const [people, setPeople] = useState([]);
  const storeDate = useSelector((state) => state.favouriteReducer);
  //console.log(storeDate);////1: {name: 'Luke Skywalker', img: 'https://starwars-visualguide.com/assets/img/characters/1.jpg'}
  useEffect(() => {
    let arr = Object.entries(storeDate);
    // console.log(arr); //получаем массив содер два массива [['2', {…}]  ['5', {…}]]
    if (arr.length) {
      //если массив не пуст то есть хотя бы один персонаж в избранном
      const result = arr.map((item) => {
        return {
          id: item[0],
          ...item[1], //здесь разворачиваем объект с name и img
        };
      });
      console.log(result); // массив с объектами {id: '1', name: 'Luke Skywalker', img: 'https://starwars-visualguide.com/assets/img/characters/1.jpg'}
      setPeople(result);
    }
  }, []);

  return (
    <>
      <h1 className="header__text">Favorites</h1>
      {people.length ? (
        <PeopleList people={people} />
      ) : (
        <h2 className={styles.comment}>No data</h2>
      )}
    </>
  );
};

export default FavouritesPage;
//  из этого обхекта 1: {name: 'Luke Skywalker', img: 'https://starwars-visualguide.com/assets/img/characters/1.jpg'} надо получить {id,img,name} для отображения персонажей в избранном
//переиспользуем компонент peoplelist только  в качетсве состояния people уже кладем данные о избранных персонажах из стора
