const FeedbackButton = (props) => {
  const { feedback, feedbackButtonClicked } = props;
  return <button onClick={feedbackButtonClicked}>{feedback}</button>;
};

export default FeedbackButton;
