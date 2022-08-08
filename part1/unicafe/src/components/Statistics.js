import StatisticLine from "./StatisticLine";

const roundOff = (number) => Math.round(number * 100 + Number.EPSILON) / 100;

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const avg = all > 0 ? roundOff((good - bad) / all) : 0;
  const positive = all > 0 ? roundOff((good / all) * 100) : 0;

  return (
    <>
      {all === 0 ? (
        "No Feedback Given!"
      ) : (
        <>
          <table>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={all} />
            <StatisticLine text="Average" value={avg} />
            <StatisticLine text="Positive" value={`${positive} %`} />
          </table>
        </>
      )}
    </>
  );
};

export default Statistics;
