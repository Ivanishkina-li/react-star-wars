import { useEffect, useState } from "react";
import { withErrorApi } from "../../HocHelper/WithErrorApi";
import { getApiResource, changeHTTP } from "../../utils/network";
import { API_PEOPLE } from "../../constans/api";
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from "../../services/getPeopleData";
import PeopleList from "../../Components/PeoplePage/PeopleList/PeopleList";
import { useQueryParams } from "../../hooks/useQueryParams";
import PeopleNavigation from "./PeopleNavigation/PeopleNavigation";
import "./PeoplePage.css";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(0);
  const [prevPage, setPrevPage] = useState(0);
  const [nextPage, setNextPage] = useState(0);
  const [counterPage, setCounterPage] = useState(1);
  //const [errorApi, setErrorApi] = useState(false); //вынесли это в WithErrorApi

  const query = useQueryParams();
  const queryPage = query.get("page");
  // console.log(prevPage, nextPage); //получили номер страницы

  const getResource = async (url) => {
    const response = await getApiResource(url);

    if (response) {
      const peopleList = response.results.map(({ name, url }) => {
        const id = getPeopleId(url);

        const img = getPeopleImage(id);

        return {
          id: id,
          name: name,
          img: img, //массив из 10 объект в каждом объекте name и url
        };
      });

      setPeople(peopleList);
      setNextPage(changeHTTP(response.next));
      setPrevPage(changeHTTP(response.previous));
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, [queryPage]);

  //если people = true то ест дланные там есть (response выполнился) только тогда отображаем имена персонажей в виде списка

  return (
    <>
      {" "}
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people} />}
    </>
  );
};
export default withErrorApi(PeoplePage);
