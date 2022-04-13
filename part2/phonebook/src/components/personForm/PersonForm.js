import { useState } from "react";
const PersonForm = ({ setPersons, persons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const onNameChange = (event) => {
    setNewName(event.target.value);
  };
  const onNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
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
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={onNameChange}
          value={newName}
        />
      </div>
      <div>
        <label htmlFor="number">Number:</label>
        <input
          id="number"
          type="text"
          name="number"
          onChange={onNumberChange}
          value={newNumber}
        />
      </div>
      <div>
        <button type="submit">Add Number</button>
      </div>
    </form>
  );
};

export default PersonForm;
