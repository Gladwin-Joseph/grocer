export const productsOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6cd8cd4fb4mshc2aef27d92c91a7p1908d7jsn9d27f3cf4a5c",
    "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
