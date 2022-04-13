import { useState } from "react";
import Filter from "./components/filter/Filter";
import PersonForm from "./components/personForm/PersonForm";
import People from "./components/people/People";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [filter, setFilter] = useState("");
  const onFilterChange = (event) => {
    setFilter(event.target.value);
  };
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
