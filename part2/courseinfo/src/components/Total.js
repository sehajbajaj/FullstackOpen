import React from "react";

const Total = ({ total }) => {
  const check = total.map((item) => item.exercises);
  const i = 0;
  const ans = check.reduce((p, c) => p + c, i);
  return <strong>Total Exercises: {ans}</strong>;
};

export default Total;
