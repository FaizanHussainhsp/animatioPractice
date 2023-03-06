import "./style.css";
const Card = (props) => {
  console.log(props.state);
  const stateSee = [
    "card",
    props.state === "entering"
      ? "active"
      : props.state === "exiting"
      ? "unactive"
      : null,
  ];

  return (
    <div className={stateSee.join(" ")}>
      <img src={props.path} className="card__img" />
      <h3 className="card__heading">{props.heading}</h3>
      <p className="card__detail">{props.detail}</p>
    </div>
  );
};

export default Card;
