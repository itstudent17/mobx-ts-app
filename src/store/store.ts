import { makeAutoObservable } from "mobx";

class Store {
  users = [];
  constructor() {
    makeAutoObservable(this);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("fetched users in constructor", data);
        this.users = data;
      });
  }
}

export default new Store();
