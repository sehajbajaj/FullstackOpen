import Header from "./components/Header";
import Filter from "./components/Filter";
import Add from "./components/Add";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import service from "./services/service";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filters, setFilters] = useState("");
  const [searchElement, setSearchElement] = useState(persons);

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

  return (
    <div>
      <Header title="PhoneBook" />
      <Filter onFilter={onFilter} filters={filters} />
      <Header title="Add a new number" />
      <Add persons={persons} setPersons={setPersons} />
      <Header title="Numbers" />
      <Content
        persons={persons}
        // filters={filters}
        searchElement={searchElement}
      />
    </div>
  );
};

export default App;
