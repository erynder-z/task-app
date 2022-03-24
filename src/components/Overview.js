import React from 'react';

export const Overview = (props) => {
  const { tasks } = props;

  return (
    <div className="wrapper">
      <ul className="list-title">
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};
