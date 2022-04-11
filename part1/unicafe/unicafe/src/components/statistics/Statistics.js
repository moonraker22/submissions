const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const totalFeedback = good + neutral + bad;
  const average = (good - bad) / totalFeedback;
  const positive = (good / totalFeedback) * 100;

  if (totalFeedback === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  } else {
    return (
      <>
        <h2>Statistics</h2>
        <br />
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {totalFeedback}</p>
        <p>Average: {average}</p>
        <p>Positive: {positive} %</p>
      </>
    );
  }
};

export default Statistics;
