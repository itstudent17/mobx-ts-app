import "./App.css";
import { useEffect } from "react";
import store from "./store/store";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";
import { observer } from "mobx-react-lite";
import Message from "./components/Message";
import { baseUrl } from "./constants";

const App: React.FC = observer(() => {
  useEffect(() => {
    store.fetchUsers(baseUrl);
  }, []);

  return (
    <div className="container">
      <Header />
      <SearchBar />
      {store.state === "pending" && <Message text={"Still loading..."} />}
      {store.state === "error" && (
        <Message text={"Error happened. Try to reload the page..."} />
      )}
      {store.state === "done" ? (
        store?.users?.length ? (
          <CardList />
        ) : (
          <Message
            text={"There are no matches. Try to change the text for searching"}
          />
        )
      ) : null}
    </div>
  );
});

export default App;
