const Button = ({ name, value, setValue }) => {


  const add = () => {
    setValue(++value);
  };

  return (
    <button onClick={add}>
      {name} Value = {value}
    </button>
  );
};

export default Button;
