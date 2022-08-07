const Info = ({ title, information, symbol }) => {
  return (
    <p>
      <b>{title}: </b>
      {information} {symbol}
    </p>
  );
};

export default Info;
