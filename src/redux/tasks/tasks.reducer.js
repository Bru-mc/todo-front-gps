import {TaskActionTypes} from './tasks.types'
import {addTaskToList, removeTaskToList, setStatusDowngrade, setStatusUpgrade} from './task.utils'

const INITIAL_STATE ={
    taskList: []
}

const taskReducer = (state =  INITIAL_STATE, action) => {

    switch (action.type){
        case TaskActionTypes.SET_TASKS:
            return {
                ...state,
                taskList: action.payload
            }
        case TaskActionTypes.ADD_TASK:
            return {
                ...state,
                taskList: addTaskToList(state.taskList, action.payload)
            }
        case TaskActionTypes.REMOVE_TASK:
            return {
                ...state,
                taskList: removeTaskToList(state.taskList, action.payload)
            }
        case TaskActionTypes.SET_STATUS_DOWNGRADE:
            return {
                ...state,
                taskList: setStatusDowngrade(state.taskList, action.payload)
            }
        case TaskActionTypes.SET_STATUS_UPGRADE:
            return {
                ...state,
                taskList: setStatusUpgrade(state.taskList, action.payload)
            }


            default:
                return state
    }
}

export default taskReducer