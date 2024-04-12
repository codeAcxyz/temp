export const storeData = (key, value) => {
  try {
    localStorage.setItem(key, value);
    if (key === "@accessToken") {
      config.headers.accessToken = value;
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};
export const getData = (key) => {
  try {
    const value = localStorage.getItem(key);
    if (key === "@accessToken") {
      config.headers.accessToken = value;
    }
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeData = (key) => {
  try {
    const value = localStorage.removeItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
};
export const config = {
  headers: {
    accessToken: localStorage.getItem("@accessToken"),
  },
};
