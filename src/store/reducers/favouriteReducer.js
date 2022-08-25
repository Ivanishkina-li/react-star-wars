import { omit } from "lodash";

//метод omit из библиот lodash удаляет ключ и значение из объекта при этом не изменяя исх объект, а возвр новый
//пример:
// var object = { 'a': 1, 'b': '2', 'c': 3 };
// _.omit(object, ['a', 'c']);
// => { 'b': '2' }

import {
  ADD_PERSON_TO_FAVOURITE,
  REMOVE_PERSON_FROM_FAVOURITE,
} from "../constants/actionTypes";

const initialState = {};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVOURITE:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_PERSON_FROM_FAVOURITE:
      return omit(state, [action.payload]); //передаем новый объект с данными без объекта с айди персонажа котор удалили

    default:
      return state;
  }
};

export default favouriteReducer;
