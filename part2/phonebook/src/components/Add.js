import { useState } from "react";
import service from "../services/service";

const Add = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");

  const addName = (e) => {
    e.preventDefault();

    const newObject = {
      name: newName,
      phone: newNum,
    };

    const dupePerson = persons.find((person) => person.name === newObject.name);

    if (dupePerson) {
      const res = window.confirm(
        `${dupePerson.name} is already added to the PhoneBook, replace the old number with new one?`
      );
      if (res) {
        service.update(dupePerson.id, newObject).then((response) => {
          setPersons(
            persons.map((person) =>
              person.id === dupePerson.id ? response : person
            )
          );
          setNewName("");
          setNewNum("");
        });
      }
    } else {
      service.create(newObject).then((response) => {
        setPersons(persons.concat(response));
        setNewName("");
        setNewNum("");
      });
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setNewNum(e.target.value);
  };

  return (
    <form onSubmit={addName}>
      <div>
        Name: <input value={newName} onChange={handleNameChange} />
      </div>
      <br />
      <div>
        Number: <input value={newNum} onChange={handlePhoneChange} />
      </div>
      <br />
      <div>
        <button type="submit">Add to PhoneBook</button>
      </div>
    </form>
  );
};

export default Add;
