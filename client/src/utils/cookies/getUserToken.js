import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getUserToken = () => {
    return cookies.get("handyman_token");
};
