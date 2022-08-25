export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);

  //дата в строковом формате, преобраз в объект
  if (data !== null) {
    return JSON.parse(data);
  }

  return {};
};

export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
