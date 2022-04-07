/* eslint-disable default-case */
import {
    SINGLE_TASK_SUCCESS,
    TASKS_LIST_FAIL,
    TASKS_LIST_REQUEST,
    TASKS_LIST_SUCCESS,
    TASK_CREATE_FAIL,
    TASK_CREATE_SUCCESS,
    TASK_DELETE_SUCCESS,
    TASK_EDIT_CANCEL,
    TASK_EDIT_REQUEST,
    TASK_EDIT_SUCCESS,
} from '../types';

const initialState = {
    tasks: [],
    task: {},
    loading: false,
    error: false,
    message: ""
}

const tasksReducer = (state=initialState, action) => {
    switch (action.type) {
        case TASKS_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case TASKS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                tasks: action.tasks,
            };
        case TASKS_LIST_FAIL:
            return {
                ...state,
                error: action.payload,
            };
        case TASK_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                tasks: [...state.tasks, action.task],
                message: action.message
            };
        case TASK_CREATE_FAIL:
            return {
                ...state,
                loading: false,
                message: action.payload,
            };
        case SINGLE_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                task: action.task,
            };
        case TASK_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                tasks: state.tasks.filter((task) => task._id !== action.id),
                message: action.message
            };
        case TASK_EDIT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case TASK_EDIT_SUCCESS:
            const taskIndex = state.tasks.findIndex(el => el._id === action.id)
            const updateTask = {
                ...action.task,
                _id: action.id
            }
            state.tasks[taskIndex] = updateTask
            return {
                ...state,
                loading: false,
                tasks: state.tasks
            }
        case TASK_EDIT_CANCEL:
            return {
                ...state,
                task: {}
            }
        default:
            return state;
    }
}

export default tasksReducer;