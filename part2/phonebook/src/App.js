import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    const existingPerson = persons.find((person) => person.name === newName);
    if (existingPerson) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const id = Math.floor(Math.random() * 100000);
      setPersons([...persons, { ...newPerson, id }]);
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{" "}
        <input
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </div>
      <form onSubmit={submitHandler}>
        <div>
          name:{" "}
          <input
            value={newName}
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(e) => {
              setNewNumber(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons
          .filter((person) => person.name.toLowerCase().includes(filter))
          .map((person) => (
            <li key={person.id}>
              {person.name} {person.number}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
