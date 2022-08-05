import Header from "./components/Header";
import Filter from "./components/Filter";
import Add from "./components/Add";
import Content from "./components/Content";
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  return (
    <div>
      <Header title="PhoneBook" />
      <Filter persons={persons} />
      <Header title="Add a new number" />
      <Add persons={persons} setPersons={setPersons} />
      <Header title="Numbers" />
      <Content persons={persons} />
    </div>
  );
};

export default App;
