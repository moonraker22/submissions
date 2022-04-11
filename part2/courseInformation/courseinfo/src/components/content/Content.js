import Part from "../part/Part";
import Header from "../header/Header";

const Content = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course} />
          <Part parts={course.parts} />
        </div>
      ))}
    </>
  );
};

export default Content;
