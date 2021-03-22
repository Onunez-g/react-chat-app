import axios from 'axios';

class httpClient {
  axiosInstance = null;
  apiUrlRoot = "http://localhost:8080"

  constructor() {
    const instance = axios.create({
      baseURL: "/",
      headers: { 
        'Connection': 'keep-alive'
      }
    });
    this.axiosInstance = instance;
  }
  anonymousGet(url) {
    return new Promise((resolve, reject) => {
      axios
      .get(this.apiUrlRoot + url)
        .then((res) => {
          const result = res.data;
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

const Http = new httpClient();
export default Http;
