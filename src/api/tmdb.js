import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: "975493d51d4b685b9b604f336a5b50ee",
  },
});
