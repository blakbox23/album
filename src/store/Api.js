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

  async getAlbum(payload) {
    const albumResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?id=${payload}`
    );
    const photosResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${payload}`
    );

    console.log('albumResponse')
    console.log(albumResponse.data)
    console.log('photosResponse')
    console.log(photosResponse.data)

    const response = {album: albumResponse.data[0], photos: photosResponse.data}

    console.log("response")
console.log(response)
    return response;
  }
}

export const api = new AppApi();
