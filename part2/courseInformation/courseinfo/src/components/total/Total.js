const Total = ({ parts }) => {
  const total = parts.reduce((acc, part) => acc + part.exercises, 0);
  return (
    <div>
      <p>Total of {total} exercises</p>
    </div>
  );
};

export default Total;
