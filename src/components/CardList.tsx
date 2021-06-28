import { observer } from "mobx-react-lite";
import store from "../store/store";
import Card from "./Card";

const CardList: React.FC = observer(() => (
  <section className={"cards"}>
    {store.users.map((user: User) => (
      <div key={user.id}>
        <Card user={user} />
      </div>
    ))}
  </section>
));

export default CardList;
