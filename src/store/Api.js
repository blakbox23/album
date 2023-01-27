import axios from "axios";

class AppApi {
  async getUsers() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  }

  async getAlbums() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );
    return response.data;
  }

  async getUser(payload) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users?id=${payload}`
    );
    return response.data;
  }

  async getUserAlbums(payload) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?userId=${payload}`
    );
    return response.data;
  }
}

export const api = new AppApi();
