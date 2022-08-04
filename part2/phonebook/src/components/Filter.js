import { useState } from "react";
import Numbers from "./Numbers";

const Filter = ({ persons }) => {
  const [filters, setFilters] = useState("");
  const [searchElement, setSearchElement] = useState(persons);

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
    <>
      <strong>Search For:</strong>
      <input type="search" value={filters} onChange={onFilter} />
      <div>
        {searchElement && searchElement.length > 0
          ? searchElement.map((element) => (
              <Numbers
                key={element.name}
                name={element.name}
                phone={element.phone}
              />
            ))
          : ""}
      </div>
    </>
  );
};

export default Filter;
