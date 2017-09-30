import axios from "axios";

const accessToken = "62578188f0534fab8bb9757a66e383dd";

const axInstance = axios.create({
  baseURL: "http://dropgdesign.com/drupal/hscards/api/",
});

export default axInstance;
