import { useState } from "react";
import useAxios from "../../util/useAxios";

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
      const result = window.confirm(
        `${newName} is already added to phonebook would you like to change the number?`
      );
      if (result) {
        const id = existingPerson.id;
        console.log(id, existingPerson);
        const updated = useAxios.update(id, newPerson);
        console.log(updated);
        updated
          .then((response) => {
            console.log(response.statusText);
            setPersons(
              persons.map((person) =>
                person.id !== id
                  ? person
                  : {
                      name: newName,
                      number: newNumber,
                      id: id,
                    }
              )
            );
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setNewName("");
            setNewNumber("");
            window.location.reload();
          });
      }
    } else {
      const id = Math.floor(Math.random() * 100000);
      setPersons([...persons, { ...newPerson, id }]);

      const added = useAxios.add({ name: newName, number: newNumber });
      added
        .then((response) => {
          console.log(response.statusText);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setNewName("");
          setNewNumber("");
          window.location.reload();
        });
    }
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
