import Total from "../total/Total";

const Part = (parts) => {
  return (
    <>
      <table>
        <tbody>
          {parts.parts.map((part) => (
            <tr key={part.id}>
              <td>{part.name}</td>
              <td>{part.exercises}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Total parts={parts.parts} />
    </>
  );
};

export default Part;
