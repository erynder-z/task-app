import React from 'react';

export const Overview = (props) => {
  const { tasks } = props;

  return (
    <div className="list-wrapper">
      <div className="list-title">
        {tasks.map((task) => {
          if (task.edit === true) {
            return (
              <div key={task.id} className="card">
                <div className="task-wrapper">
                  <div className="card-side"></div>
                  <input
                    className="edit-task-input"
                    key={'input-' + task.id}
                    type="text"
                    name="taskEdit"
                    id="editField"
                    placeholder={task.text}
                    onChange={(e) => {
                      props.change(e);
                    }}
                  ></input>
                </div>
                <div className="btn-wrapper">
                  <button
                    className="resubmit-task"
                    key={'submit-' + task.id}
                    onClick={(e) => {
                      props.submitChange(e, task.id);
                    }}
                  >
                    RESUBMIT
                  </button>
                  <button
                    className="delete-task"
                    key={'ed-del-' + task.id}
                    onClick={() => {
                      props.delete(task.id);
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          }
          return (
            <div key={task.id} className="card">
              <div className="task-wrapper">
                <div className="card-side">
                  {props.tasks.indexOf(task) + 1}{' '}
                </div>
                <h4>{task.text} </h4>
              </div>
              <div className="btn-wrapper">
                <button
                  className="edit-task"
                  key={'edit-' + task.id}
                  onClick={(e) => {
                    props.edit(e, task.id);
                  }}
                >
                  EDIT
                </button>
                <button
                  className="delete-task"
                  key={'del-' + task.id}
                  onClick={() => {
                    props.delete(task.id);
                  }}
                >
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
