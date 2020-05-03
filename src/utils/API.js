import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomCat: function() {
    return axios.get("https://api.thecatapi.com/v1/images/search");
  }
};
