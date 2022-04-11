import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { postTask } from '../redux/actions';
import InfoMessage from './InfoMessage';
const FormIuput = () => {
    const [inputs, setInputs] = useState({ name: "", description: "" });
    const [infoMsg, setInfoMsg] = useState('');
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }

    const addTask = (e) => {
        e.preventDefault()
        if (inputs.name === "" || inputs.description === "") {
            setInfoMsg('field name or description can not be empty');
        } else {
            dispatch(postTask(inputs));
            setInputs({ name: "", description: "" });
            setInfoMsg('Task added successfully');

            setTimeout(() => {
                setInfoMsg('');
            }, 3000)
        }
        
    }

  return (
      <form className="main__form">
          <InfoMessage infoMsg={infoMsg} setInfoMsg={setInfoMsg} />
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
              <textarea
                  className="materialize-textarea main__form-input"
                  id="tast"
                  type="text"
                  name="description"
                  value={inputs.description}
                  onChange={handleChange}></textarea>
          </div>
          <div className="main__btn-group">
              <button className="main__form-btn" onClick={addTask}>
                  ADD TASK
              </button>
          </div>
      </form>
  );
}

export default FormIuput