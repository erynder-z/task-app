import React from 'react';

export const Overview = (takslist) => {
  const taskArray = takslist.tasklist;

  return (
    <div className="wrapper">
      <ul className="list-title">
        {taskArray.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
};
