const Numbers = ({ person, removePerson }) => {
  return (
    <p>
      {person.name}: {person.phone}
      <button onClick={() => removePerson(person)} className="deleteButton">
        Delete
      </button>
    </p>
  );
};

export default Numbers;
