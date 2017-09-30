import axios from "./config";

export const getCards = () => {
  return axios
    .get("/cards/last-exp/")
    .then(response => {
      if (response.status === 200 && response.data) {
        return { success: true, cards: response.data };
      }
    })
    .catch(err => {
      console.log(err);
      alert("error while cards data");
      return { success: false };
    });
};
