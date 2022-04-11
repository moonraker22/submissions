const Statistics = (props) => {
  const { good, neutral, bad } = props;

  return (
    <>
      <h2>Statistics</h2>
      <br />
      {good ? <p>Good: {good}</p> : null}
      {neutral ? <p>Neutral: {neutral}</p> : null}
      {bad ? <p>Bad: {bad}</p> : null}
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {good + neutral + bad}</p>
      <p>Average: {(good + neutral + bad) / 3}</p>
      <p>Positive: {(good / (good + neutral + bad)) * 100} %</p>
    </>
  );
};

export default Statistics;
