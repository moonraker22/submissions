const StatisticsLine = ({ title, value }) => {
  return (
    <>
      <p>
        {title}: {value} {title === "positive" ? "%" : ""}
      </p>
    </>
  );
};

export default StatisticsLine;
