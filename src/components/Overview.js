import React from 'react';

export const Overview = (props) => {
  const { tasks } = props;

  return (
    <div className="wrapper">
      <ul className="list-title">
        {tasks.map((task) => {
          if (task.edit === true) {
            return (
              <>
                <input
                  key={'input-' + task.id}
                  type="text"
                  name="taskEdit"
                  id="editField"
                  placeholder={task.text}
                  onChange={(e) => {
                    props.change(e);
                  }}
                ></input>
                <button
                  key={'submit-' + task.id}
                  onClick={(e) => {
                    props.submitChange(e, task.id);
                  }}
                >
                  RESUBMIT
                </button>
                <button
                  key={'ed-del-' + task.id}
                  onClick={() => {
                    props.delete(task.id);
                  }}
                >
                  DELETE
                </button>
              </>
            );
          }
          return (
            <li key={task.id}>
              {props.tasks.indexOf(task) + 1}.) {task.text}{' '}
              <button
                key={'edit-' + task.id}
                onClick={(e) => {
                  props.edit(e, task.id);
                }}
              >
                EDIT
              </button>
              <button
                key={'del-' + task.id}
                onClick={() => {
                  props.delete(task.id);
                }}
              >
                DELETE
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
