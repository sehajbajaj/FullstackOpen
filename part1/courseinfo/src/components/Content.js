import Part from "./Part";
import Total from "./Total";

const Content = ({ parts }) => {
  return (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
      <Total
        parts={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      />
    </>
  );
};

export default Content;
