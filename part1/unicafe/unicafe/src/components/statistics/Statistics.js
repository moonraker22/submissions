import StatisticsLine from "../statisticsLine/StatisticsLine";

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const totalFeedback = good + neutral + bad;
  const average = (good - bad) / totalFeedback;
  const positive = ((good / totalFeedback) * 100).toFixed(2);

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
        <table>
          <tbody>
            <StatisticsLine title="good" value={good} />
            <StatisticsLine title="neutral" value={neutral} />
            <StatisticsLine title="bad" value={bad} />
            <StatisticsLine title="all" value={totalFeedback} />
            <StatisticsLine title="average" value={average} />
            <StatisticsLine title="positive" value={positive} />
          </tbody>
        </table>
      </>
    );
  }
};

export default Statistics;
