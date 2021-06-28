import "./App.css";
import { useEffect } from "react";
import store from "./store/store";
import ToggleButton from "./components/ToggleButton";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";
import { observer } from "mobx-react-lite";
import Message from "./components/Message";
import { baseUrl } from "./constants";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TableComponent from "./components/TableComponent";

const TodosComponent = observer(() => {
  useEffect(() => {
    store.fetchUsers(baseUrl);
  }, []);

  return (
    <div className={"container"}>
      <ToggleButton path={"/"} text={"Back to cards of users"} />
      <TableComponent />
    </div>
  );
});

const UsersComponent = observer(() => {
  useEffect(() => {
    store.fetchUsers(baseUrl);
  }, []);

  return (
    <div className="container">
      <ToggleButton path={"/todos"} text={"View table of users"} />
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

const App: React.FC = observer(() => {
  return (
    <Router>
      <Route path="/" exact render={() => <UsersComponent />} />
      <Route path="/todos" component={TodosComponent} />
    </Router>
  );
});

export default App;
