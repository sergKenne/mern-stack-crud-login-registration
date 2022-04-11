import axios from "axios"
const {
    TASKS_LIST_REQUEST,
    TASKS_LIST_SUCCESS,
    TASKS_LIST_FAIL,
    TASK_DELETE_REQUEST,
    TASK_DELETE_SUCCESS,
    TASK_CREATE_SUCCESS,
    TASK_CREATE_REQUEST,
    TASK_CREATE_FAIL,
    SINGLE_TASK_SUCCESS,
    TASK_EDIT_REQUEST,
    TASK_EDIT_FAIL,
    TASK_EDIT_SUCCESS,
    TASK_EDIT_CANCEL,
} = require('./types');

const token = localStorage.getItem("token"); 

export const getTasks = () => async (dispatch) => {
    dispatch({ type: TASKS_LIST_REQUEST });
    try {
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token': token,
        };
        const { data } = await axios.get("/api/task", {headers})
        dispatch({
            type: TASKS_LIST_SUCCESS,
            tasks: data
        })
    } catch (error) {
        dispatch({
            type: TASKS_LIST_FAIL,
            payload: error.message
        })
    } 
}

export const postTask = (task) => async (dispatch) => {
    dispatch({ type: TASK_CREATE_REQUEST });
    try {
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token': token,
        };
        const { data } = await axios.post("/api/task", task, { headers: headers })
        dispatch({
            type: TASK_CREATE_SUCCESS,
            task: data.task,
            message: data.msg
        });
    } catch (error) {
        dispatch({
            type: TASK_CREATE_FAIL,
            payload: error.message,
        });
    }

}

export const singleTask = (id) => (dispatch, getState) => {
    const task = getState().tasks.tasks.find((el) => el._id === id);
    dispatch({
        type: SINGLE_TASK_SUCCESS,
        task
    })
}

export const editTask = (id, task) => async (dispatch) => {
    dispatch({ type: TASK_EDIT_REQUEST });
    try {
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token': token,
        };
        await axios.put(`/api/task/${id}`, task, {headers})
        dispatch({type: TASK_EDIT_SUCCESS, id,task })
        dispatch({type: TASK_EDIT_CANCEL})
    } catch (error) {
        dispatch({
            type: TASK_EDIT_FAIL,
            payload: error.message,
        });
    }
}

export const cancelEditTask = (dispatch) => {
    dispatch({
        type: TASK_EDIT_CANCEL
    })
}

export const deleteTask = (id) => async (dispatch) => {
    dispatch({ type: TASK_DELETE_REQUEST });
    try {
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token': token,
        };
        const { data } = await axios.delete(`/api/task/${id}`, {headers}) 
        dispatch({
            type: TASK_DELETE_SUCCESS,
            id,
            message: data.msg
        });
    } catch (error) {
        dispatch({
            type: TASKS_LIST_FAIL,

        })
    }
}