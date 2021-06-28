interface ICardProps {
  user: User;
}

const Card: React.FC<ICardProps> = ({ user }) => (
  <div className="card">
    <div className="card-inner">
      <div className="card-front">
        <img src={""} alt="" title={`Here should be ${user.name}'s picture`} />
      </div>
      <div className="card-back">
        <h1>{user.name}</h1>
        <ul>
          <li>
            <strong>Name:</strong> {user.name}
          </li>
          <li>
            <strong>Username:</strong> {user.username}
          </li>
          <li>
            <strong>City:</strong> {user.address.city}
          </li>
          <li>
            <strong>Company:</strong> {user.company.name}
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Card;
