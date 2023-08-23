export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // Todo: We will not hard-code server URL here.
    const response = await fetch("http://localhost:1010/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {
  // Todo: On server we will support multiple values.
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`
  }
  return new Promise(async (resolve) => {
    // Todo: We will not hard-code server URL here.
    const response = await fetch(
      "http://localhost:1010/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
