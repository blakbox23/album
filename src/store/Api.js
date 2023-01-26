
import axios from "axios";

class AppApi {

  async getUsers() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      return (response.data)
    }

}


export const api = new AppApi(); 