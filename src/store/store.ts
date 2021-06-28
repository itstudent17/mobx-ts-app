import { runInAction, makeAutoObservable } from "mobx";
import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../constants";

class Store {
  users: Array<User> = [];
  state: string = "pending";
  query: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setQuery(text: string) {
    this.query = text;
    const url = text ? `${baseUrl}?name_like=${text}` : baseUrl;
    this.fetchUsers(url);
  }

  async fetchUsers(url: string) {
    this.state = "pending";

    try {
      const response: AxiosResponse = await axios.get<User[]>(url);
      runInAction(() => {
        this.users = response.data;
        this.state = "done";
      });
    } catch (e) {
      runInAction(() => {
        this.state = "error";
      });
    }
  }
}

export default new Store();
