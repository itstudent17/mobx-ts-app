interface IMessageProps {
  text: string;
}

const Message: React.FC<IMessageProps> = ({ text }) => (
  <div className="center">
    <h2>{text}</h2>
  </div>
);

export default Message;
