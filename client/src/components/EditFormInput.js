import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { cancelEditTask, editTask } from '../redux/actions';
import InfoMessage from './InfoMessage';

const EditFormInput = ({task}) => {
    const [inputs, setInputs] = useState({ name: '', description: '' });
    const [infoMsg, setInfoMsg] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    const updateTask = (e) => {
        e.preventDefault();
        if (inputs.name === '' || inputs.description === '') {
            setInfoMsg('field name or description can not be empty');
        } else {
            dispatch(editTask(task._id, inputs));
            setInfoMsg('Task updated successfully');
            setTimeout(() => {
                setInfoMsg('');
            }, 3000);
        }
    }

    const cancelTask = () => {
        dispatch(cancelEditTask())
    }

    useEffect(() => {
        
        setInputs({
            name: task.name,
            description: task.description
        })
        
        return () => {
            setInputs({name: "", description: ""});    
        }
    },[])

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
                <button className="main__form-btn main__form-btn--green" onClick={updateTask}>
                    UPDATE TASK
                </button>
                <button className="main__form-btn main__form-btn--delete" onClick={cancelTask}>
                    CANCEL
                </button>
            </div>
        </form>
    );
};

export default EditFormInput