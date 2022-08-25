import {
  SWAPI_PEOPLE,
  SWAPI_ROOT,
  GUIDE_IMG_EXTENSION,
  URL_IMG_PERSON,
  SWAPI_PARAM_PAGE,
} from "../constans/api";

export const getPeoplePageId = (url) => {
  //вычисл позицию на которой находится SWAPI_PARAM_PAGE
  const position = url.lastIndexOf(SWAPI_PARAM_PAGE); //28
  const id = url.slice(position + SWAPI_PARAM_PAGE.length); //обрезаем всё до цифры(числа) страницы, то есть остается только число.
  return Number(id); //приводим к числу
};

const getId = (url, category) => {
  const id = url
    .replace(SWAPI_ROOT + category, "") //   /1/
    .replace(/\//g, ""); //избавились от слеша внутри цифр
  return id;
};

//изачально получаем такой url url: 'https://swapi.dev/api/people/1/' где цифры на конце разные . с помощ этой функции мы получаем только посл цифры
export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = (id) =>
  `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;
