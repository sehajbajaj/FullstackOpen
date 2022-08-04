import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  console.log(course);
  return (
    <>
      {course.map((item) => {
        return (
          <div key={item.id}>
            <Header course={item} />
            <Content parts={item.parts} />
          </div>
        );
      })}
    </>
  );
};

export default Course;
