import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { cancelEditTask, editTask } from '../redux/actions';

const EditFormInput = ({task}) => {
    const [inputs, setInputs] = useState({ name: '', description: '' });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    const updateTask = (e) => {
        e.preventDefault();
        dispatch(editTask(task._id, inputs));   
    }

    const cancelTask = () => {
        dispatch(cancelEditTask())
    }

    useEffect(() => {
        setInputs({
            name: task.name,
            description: task.description
        })
    },[])

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
                    className="main__form-btn main__form-btn--green"
                    onClick={updateTask}
                >
                    UPDATE TASK
                </button>
                <button
                    className="main__form-btn main__form-btn--delete"
                    onClick={cancelTask}
                >
                    CANCEL
                </button>
            </div>
        </form>
    );
};

export default EditFormInput