import instance from "./instance";

const getCocktail = async (queryType, queryParam) => {
  let res = await instance.get(`${queryType}.php?${queryParam}`);
  return res;
};

export default getCocktail;
