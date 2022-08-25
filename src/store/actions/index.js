//данные из PersonPhoto передаем в actions (в этот файл) и в зависимости от type экшена данные передаются в favouriteReducer

import {
  ADD_PERSON_TO_FAVOURITE,
  REMOVE_PERSON_FROM_FAVOURITE,
} from "../constants/actionTypes";

export const setPersonToFavourite = (person) => ({
  type: ADD_PERSON_TO_FAVOURITE,
  payload: person,
});

export const removePersonToFavourite = (personId) => ({
  type: REMOVE_PERSON_FROM_FAVOURITE,
  payload: personId,
});
