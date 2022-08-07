import Numbers from "./Numbers";

const Content = ({ persons, searchElement, removePerson }) => {
  const data =
    searchElement && searchElement.length > 0 ? searchElement : persons;
  return (
    <>
      {data.map((person) => (
        <div key={person.name}>
          <Numbers name={person.name} phone={person.phone} />
          <button onClick={() => removePerson(person)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Content;
