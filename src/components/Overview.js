import React from 'react';

export const Overview = (props) => {
  const { tasks } = props;

  return (
    <div className="wrapper">
      <ul className="list-title">
        {tasks.map((task) => (
          <li key={task.id}>
            {props.tasks.indexOf(task) + 1}.) {task.text}{' '}
            <button
              id={task.id}
              onClick={() => {
                props.delete(task.id);
              }}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
