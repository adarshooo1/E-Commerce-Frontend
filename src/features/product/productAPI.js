export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    // Todo: We will not hard-code server URL here.
    const response = await fetch("http://localhost:1010/products/" + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function createProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:1010/products/", {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:1010/products/" + update.id,
      {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination, admin) {
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

  if (admin) {
    queryString += `admin=true`;
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
