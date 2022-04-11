import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, singleTask } from '../redux/actions';

const Task = ({ task }) => {
    
    const dispatch = useDispatch()
    const taskEdited = useSelector(state => state.tasks.task)
    const isEdit = Object.keys(taskEdited).length;

    const removeTask = (id) => {
        dispatch(deleteTask(id))
    }

    const getSingleTask = (id) => {
        dispatch(singleTask(id)) 
    } 

  return (
      <div className="main__form">
          <h2 className="main__task-name">
              Task: <span>{task.name}</span>
          </h2>
          <p className="main__task-description">
              Description: <span>{task.description}</span>
          </p>
          <div className="main__form-divider"></div>
          <div className="main__btn-group">
              <button
                  className={`main__form-btn main__form-btn--edit ${isEdit ? 'disable' : ''}`}
                  disabled={isEdit ? true : false}
                  onClick={() => getSingleTask(task._id)}>
                  EDIT
              </button>
              <button
                  className={`main__form-btn main__form-btn--delete ${isEdit ? 'disable' : ''}`}
                  disabled={isEdit ? true : false}
                  onClick={() => removeTask(task._id)}>
                  DELETE
              </button>
          </div>
      </div>
  );
}

export default Task