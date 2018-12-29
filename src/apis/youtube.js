import axios from "axios";

const KEY = "AIzaSyCvblR6kMya2ZIkKiMD3Uf3lEZ4CMeuUAo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
