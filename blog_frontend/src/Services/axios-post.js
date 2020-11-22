import axios from "axios";
import { headers, config } from "../Config/Constants";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const section = "posts/";

const get_posts = () => {
  return axios({
    method: "GET",
    url: config.url.API_URL + section,
    headers: headers,
  });
};

const create_post = (params) => {
  return axios({
    method: "POST",
    url: `${config.url.API_URL + section}create/`,
    data: params,
    headers: headers,
  });
};

export { get_posts, create_post };
