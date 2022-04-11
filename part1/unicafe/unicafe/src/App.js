import { useState } from "react";
import FeedbackButton from "./components/feedbackButton/FeedbackButton";
import Statistics from "./components/statistics/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Unicafe feedback</h1>
      <FeedbackButton
        feedback="good"
        feedbackButtonClicked={() => setGood(good + 1)}
      />
      <FeedbackButton
        feedback="neutral"
        feedbackButtonClicked={() => setNeutral(neutral + 1)}
      />
      <FeedbackButton
        feedback="bad"
        feedbackButtonClicked={() => setBad(bad + 1)}
      />
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
