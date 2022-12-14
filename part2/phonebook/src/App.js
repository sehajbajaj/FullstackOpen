import Header from "./components/Header";
import Filter from "./components/Filter";
import Add from "./components/Add";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import service from "./services/service";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filters, setFilters] = useState("");
  const [searchElement, setSearchElement] = useState(persons);
  const [notification, setNotification] = useState({
    message: null,
    style: null,
  });

  useEffect(() => {
    service.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  const onFilter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = persons.filter((person) => {
        return person.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setSearchElement(results);
    } else {
      setSearchElement(keyword);
    }
    setFilters(keyword);
  };

  const removePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      service
        .remove(person.id)
        .then((response) => {
          const updatedPersons = persons.filter(
            (item) => item.id !== person.id
          );
          setPersons(updatedPersons);
          setNotification({
            message: `${person.name} is removed from the PhoneBook`,
            style: "success",
          });
          setTimeout(() => {
            setNotification({ message: null, style: null });
          }, 3000);
        })
        .catch((error) => {
          setNotification({
            message: `${person.name} was already removed from PhoneBook`,
            style: "error",
          });
          setTimeout(() => {
            setNotification({ message: null, style: null });
          }, 3000);
          const updatedPersons = persons.filter(
            (item) => item.id !== person.id
          );
          setPersons(updatedPersons);
        });
    }
  };

  return (
    <div>
      <Header title="PhoneBook" />
      <Notification notification={notification} />
      <Filter onFilter={onFilter} filters={filters} />
      <Header title="Add a new number" />
      <Add
        persons={persons}
        setPersons={setPersons}
        setNotification={setNotification}
      />
      <Header title="Numbers" />
      <Content
        persons={persons}
        searchElement={searchElement}
        removePerson={removePerson}
      />
    </div>
  );
};

export default App;
