/* eslint-disable  */
import axios from 'axios';

class AppApi {
  async getUsers() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    return response.data;
  }

  async getAlbums() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/albums',
    );
    return response.data;
  }

  async getUser(payload) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users?id=${payload}`,
    );
    console.log(response.data[0]);
    return response.data[0];
  }

  async getUserAlbums(payload) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?userId=${payload}`,
    );
    return response.data;
  }

  async getAlbum(payload) {
    const albumResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?id=${payload}`,
    );
    const photosResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${payload}`,
    );
    const response = {
      album: albumResponse.data[0],
      photos: photosResponse.data,
    };

    return response;
  }

  async getPhoto(payload) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${payload}`,
    );

    return response.data;
  }

  async editPhoto(payload) {
    const response = await axios.patch(
      `https://jsonplaceholder.typicode.com/photos/${payload.id}`,
      { title: payload.title },
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    return response.data;
  }
}

export const api = new AppApi();
