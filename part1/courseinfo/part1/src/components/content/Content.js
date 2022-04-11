import Part from "../part/Part";

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((part) => (
        <Part key={part.name} part={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

export default Content;
