import { observer } from "mobx-react-lite";
import store from "../store/store";

const SearchBar: React.FC = observer(() => (
  <section className={"search"}>
    <input
      type="text"
      value={store.query}
      placeholder={"Search users in {JSON} Placeholder"}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        store.setQuery(event.target.value);
      }}
      autoFocus
    />
  </section>
));

export default SearchBar;
