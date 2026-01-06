const Button = ({ text, onClick }) => {
  const className =
    text === "="
      ? "btn equals"
      : ["+", "-", "*", "/"].includes(text)
      ? "btn operator"
      : text === "AC" || text === "DEL"
      ? "btn action"
      : text === "0"
      ? "btn zero"
      : "btn";

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
