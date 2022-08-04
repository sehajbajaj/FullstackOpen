import Part from "./Part";
import Total from "./Total";

const Content = ({ parts }) => {
  console.log(parts);
  return (
    <>
      {parts.map((item) => (
        <Part key={item.id} name={item.name} exercises={item.exercises} />
      ))}
      <Total total={parts} />
    </>
  );
};

export default Content;
