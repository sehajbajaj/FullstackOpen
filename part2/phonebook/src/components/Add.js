import { useState } from "react";

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
    const dupePhone = persons.find(
      (person) => person.phone === newObject.phone
    );
    const len = newNum.length;

    if (dupePerson === undefined && dupePhone === undefined && len === 10) {
      setPersons(persons.concat(newObject));
      setNewName("");
      setNewNum("");
    } else if (dupePerson !== undefined) {
      alert(`${newName} has already been added to the PhoneBook`);
    } else if (dupePhone !== undefined) {
      alert(`${newNum} has already been added to the PhoneBook`);
    } else if (len !== 10) {
      alert(`${newNum} is invalid!`);
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
