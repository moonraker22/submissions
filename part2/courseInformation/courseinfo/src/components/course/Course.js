import Content from "../content/Content";

const Course = ({ courses }) => {
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <Content courses={courses} />
    </div>
  );
};

export default Course;
