const StatisticLine = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>
          <strong>{text}: </strong>
        </td>
        <td>{value} </td>
      </tr>
    </tbody>
  );
};

export default StatisticLine;
