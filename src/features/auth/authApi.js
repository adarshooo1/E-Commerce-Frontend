export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:1010/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // TODO: On server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function checkUser(loginInfo, reject) {
  return new Promise(async (resolve) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await fetch("http://localhost:1010/users?email=" + email);
    const data = await response.json();
    console.log({ data });
    if (data.length) {
      if (password === data[0].password) {
        resolve({ data: data[0] });
      } else {
        reject({ message: "Wrong credential" });
      }
      resolve({ data: data[0] });
    } else {
      reject({ message: "User not found" });
    }
    // TODO: On server it will only return some info of user (not password)
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:1010/users/"+update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // TODO: On server it will only return some info of user (not password)
    resolve({ data });
  });
}
