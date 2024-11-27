import fetchApi from "../fetchApi";

const getCep = async (cep: string) => {
  return await fetchApi({
    service: "viaCep",
    endPoint: `/${cep}/json`,
    method: "GET",
  });
};

export default getCep;
