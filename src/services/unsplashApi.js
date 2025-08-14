import axios from "axios";

const ACCESS_KEY = "40JrOpNyUEjEmF5m4StmqimYIubtHba66WxPoOCk70k"; 
axios.defaults.baseURL = "https://api.unsplash.com/";

export async function fetchImages(query, page) {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
}
