import { useState, useEffect } from "react";
import Filter from "./components/filter/Filter";
import PersonForm from "./components/personForm/PersonForm";
import People from "./components/people/People";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const url = "http://localhost:3001/persons";
  const [filter, setFilter] = useState("");
  const onFilterChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPersons(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        filter={filter}
        setFilter={setFilter}
        onFilterChange={onFilterChange}
      />
      <br />
      <h2>Add a new number:</h2>
      <PersonForm setPersons={setPersons} persons={persons} />
      <h2>Numbers:</h2>
      <People persons={persons} setPersons={setPersons} filter={filter} />
    </div>
  );
};

export default App;
