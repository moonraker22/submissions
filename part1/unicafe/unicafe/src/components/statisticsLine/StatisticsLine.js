const StatisticsLine = ({ title, value }) => {
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>
          {value} {title === "positive" ? "%" : ""}
        </td>
      </tr>
    </>
  );
};

export default StatisticsLine;
