import axios from "axios";
const IsbnService = {
  search: function (value) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + encodeURI(value)
    );
  },
};

export default IsbnService;
