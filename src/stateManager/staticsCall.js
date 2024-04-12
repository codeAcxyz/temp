import { storeData } from "operations/localStorage";
import yelp from "tools/yelp";
export const createUser = (data) => {
  try {
    const response = yelp.post("/auth/create-user", { ...data });
    storeData("@accessToken", response?.data?.data.accessToken);
    return response?.data?.data;
  } catch (error) {
    return false;
  }
};
