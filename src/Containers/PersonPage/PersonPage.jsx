import React from "react";
import { useEffect, useState, Suspense } from "react";
import { useSelector } from "react-redux";
import { getApiResource } from "../../utils/network";
import { API_PERSON } from "../../constans/api";
import { withErrorApi } from "../../HocHelper/WithErrorApi";
import { getPeopleImage } from "../../services/getPeopleData";
import UIloading from "../../Components/UI/UIloading/UIloading";

import PersonLinkBack from "../../Components/PersonPage/PersonLinkBack/PersonLinkBack";
import PersonInfo from "../../Components/PersonPage/PersonInfo/PersonInfo";
import PersonPhoto from "../../Components/PersonPage/PersonPhoto/PersonPhoto";

import styles from "./PersonPage.module.css";

const PersonFilms = React.lazy(() =>
  import("../../Components/PersonPage/PersonFilms")
);
const PersonPage = ({ match, setErrorApi }) => {
  const [personId, setPersonId] = useState(null); //
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavourite, setPersonFavourite] = useState(false); //

  const storeDate = useSelector((state) => state.favouriteReducer); //

  useEffect(() => {
    (async () => {
      const id = match.params.id; // http://localhost:3000/people/123    то есть цифры введен в адр строку после двоеточия это и есть айди "/people/:id"
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      console.log(`${API_PERSON}/${id}/`, res); //объект с данными о конкретном персонаже

      setPersonId(id);
      storeDate[id] ? setPersonFavourite(true) : setPersonFavourite(false); // смотрим есть ли такой элемент уже в изранном. поэтому подключаемся к стору. если да устанавл тру

      if (res) {
        setPersonInfo([
          { title: "height", data: res.height },
          { title: "weight", data: res.mass },
          { title: "hair color", data: res.hair_color },
          { title: "eye color", data: res.eye_color },
          { title: "birth", data: res.birth_year },
        ]);

        setPersonPhoto(getPeopleImage(id));
        setPersonName(res.name);

        res.films.length && setPersonFilms(res.films); // если длина массива с фильмами > 0
        console.log(res.films); //https://swapi.dev/api/films/1/

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);
  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonPhoto
            personId={personId}
            personPhoto={personPhoto}
            personName={personName}
            personFavourite={personFavourite}
            setPersonFavourite={setPersonFavourite}
          />

          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UIloading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

export default withErrorApi(PersonPage);
