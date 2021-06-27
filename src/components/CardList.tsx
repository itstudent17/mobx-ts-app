import { observer } from "mobx-react-lite";
import store from "../store/store";
import Card from "./Card";

const CardList = observer(() => (
  <section className={"cards"}>
    {store.users.map((user: User) => (
      <Card user={user} />
    ))}
  </section>
));

export default CardList;
