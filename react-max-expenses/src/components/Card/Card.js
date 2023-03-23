import "./Card.css";

const Card = (props) => {
  const classString = `card ${props.className}`;
  return <div className={classString}>{props.children}</div>;
};

export default Card;
