import API from "../api/index";

export const getCurrenciesRequest = async () => {
  const { data } = await API().get();
  return data;
};
