import { storeData } from "operations/localStorage";
import { config } from "operations/localStorage";
import yelp from "tools/yelp";

const WEB_INDEX = "/auth/web-index";

//function to refresh profile
export const fetchProfile = async () => {
  try {
    const response = await yelp.post(WEB_INDEX, {}, config);
    storeData("@accessToken", response.data?.data?.accessToken);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data from API 1:", error);
    throw error;
  }
};
