const People = ({ persons, filter }) => {
  return (
    <div>
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

export default People;
