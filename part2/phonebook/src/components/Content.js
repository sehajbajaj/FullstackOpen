import Numbers from "./Numbers";

const Content = ({ persons, searchElement }) => {
  const data =
    searchElement && searchElement.length > 0 ? searchElement : persons;
  return (
    <>
      {data.map((person) => (
        <Numbers key={person.name} name={person.name} phone={person.phone} />
      ))}
    </>
  );
};

export default Content;
