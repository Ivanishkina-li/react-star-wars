import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import styles from "./SearchPage.module.css";
import { getApiResource } from "../../utils/network";
import { API_SEARCH } from "../../constans/api";
import { withErrorApi } from "../../HocHelper/WithErrorApi";
import { getPeopleImage, getPeopleId } from "../../services/getPeopleData";
import UIInput from "../../Components/UI/UIInput/UIInput";
import SearchPageInfo from "../../Components/SearchPageInfo/SearchPageInfo";
const SearchPage = ({ setErrorApi }) => {
  const [people, setPeople] = useState([]);
  const [inputSearchValue, setInputSearchValue] = useState("");
  const getResource = async (param) => {
    console.log(param);
    const res = await getApiResource(API_SEARCH + param);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);

        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      console.log(res);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    //если будет пустой запрос. то есть перед поиском персонажа в инпуте, будут изображеные перв 10 персонажей а не пустое место
    getResource("");
  }, []);

  //запрос будет происходить с задержкой 4мс,чтобы после каждой буквы не отправлялся запрос
  const debounceGetResponse = useCallback(
    debounce((value) => getResource(value), 400),
    []
  );

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    //getResource(value); //то что ввели в инпут передаем в запрос на сервер
    debounceGetResponse(value);
  };
  return (
    <>
      <h1 className="">Search</h1>
      <UIInput
        handleInputChange={handleInputChange}
        value={inputSearchValue}
        placeholder="введите имя персонажа"
        classes={styles.input__search}
      />
      <SearchPageInfo people={people} />
    </>
  );
};

export default withErrorApi(SearchPage);
