import useAxios from "../../util/useAxios";

const People = ({ persons, filter, setPersons }) => {
  const deletePerson = (person) => {
    const result = window.confirm(
      "Are you sure you want to delete this person?"
    );
    if (result) {
      const id = person.id;
      const deleted = useAxios.remove(id);
      deleted
        .then((response) => {
          console.log(response.statusText);
          setPersons(persons.filter((p) => p.id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div>
      <ul>
        {persons
          .filter((person) => person.name.toLowerCase().includes(filter))
          .map((person) => (
            <li key={person.id}>
              {person.name} {person.number}{" "}
              <button onClick={() => deletePerson(person)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default People;
