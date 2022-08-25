//функция которая заменяет http на https
import { HTTP, HTTPS } from "../constans/api";
export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;
  return result;
};
export const makeConcurrentRequest = async (url) => {
  const res = await Promise.all(
    url.map((res) => {
      return fetch(res).then((res) => res.json());
    })
  );

  return res;
};

export const getApiResource = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(` Ошибка ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("could not fetch", error.message);
    return false;
  }
  //или можно так:
  //   fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
};
