import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { postTask } from '../redux/actions';
const FormIuput = () => {
    const [inputs, setInputs] = useState({ name: "", description: "" });
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }

    const addTask = (e) => {
        e.preventDefault()
        console.log(inputs);
        dispatch(postTask(inputs))
        setInputs({name:"", description:""})
    }

  return (
      <form className="main__form">
          <div className="main__form-group">
              <label className="main__form-label" htmlFor="task">
                  Task
              </label>
              <input
                  id="tast"
                  type="text"
                  name="name"
                  value={inputs.name}
                  onChange={handleChange}
                  className="main__form-input"
                  placeholder=""
              />
          </div>
          <div className="main__form-group">
              <label className="main__form-label" htmlFor="task">
                  Description
              </label>
              <input
                  id="tast"
                  type="text"
                  name="description"
                  value={inputs.description}
                  onChange={handleChange}
                  className="main__form-input"
                  placeholder=""
              />
          </div>
          <div className="main__btn-group">
              <button
                  className="main__form-btn"
                  onClick={addTask}
              >ADD TASK</button>

              {/* <button className="main__form-btn main__form-btn--edit">
                    EDIT
                </button>
                <button className="main__form-btn main__form-btn--delete">
                    DELETE
                </button>
                <button className="main__form-btn main__form-btn--green">
                    UPDATE TASK
                </button>
                <button className="main__form-btn main__form-btn--green">
                    CANCEL
                </button> */}
          </div>
      </form>
  );
}

export default FormIuput