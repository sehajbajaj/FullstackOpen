import Numbers from "./Numbers";

const Content = ({ persons }) => {
  return (
    <>
      {persons.map((person) => {
        return (
          <Numbers key={person.name} name={person.name} phone={person.phone} />
        );
      })}
    </>
  );
};

export default Content;
