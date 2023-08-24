export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // Todo: We will not hard-code server URL here.
    const response = await fetch("http://localhost:1010/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    // Todo: We will not hard-code server URL here.
    const response = await fetch("http://localhost:1010/products/" + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  // Filter = {"category":["smartphone","laptop"]}
  // sort = {_sort:"price", _order:"asc"}
  // Pagination = {_page:1&_limit=10}
  // Todo: On server we will support multiple values in filter.
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length > 0) {
      const lastCategoryVales = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryVales}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    // Todo: We will not hard-code server URL here.
    const response = await fetch(
      "http://localhost:1010/products?" + queryString
    );
    const data = await response.json();
    const totalItems = await response.headers.get("X-TOTAL-COUNT");
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    // Todo: We will not hard-code server URL here.
    const response = await fetch("http://localhost:1010/categories");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    // Todo: We will not hard-code server URL here.
    const response = await fetch("http://localhost:1010/brands");
    const data = await response.json();
    resolve({ data });
  });
}
