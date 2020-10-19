import React from 'react'

import { Task } from './Types'
import { ReactComponent as Done } from 'assets/icons/done.svg'

import s from './Task.module.scss'

type Props = {
    task: Task
    handleDone: (task: Task) => void
    handleDelete: (task: Task) => void
}
 
const TaskItem: React.FC<Props> = ({ task, handleDone, handleDelete }) => {
 
    return (
     <li className={s.task__item}>
            <div>
        <button
                onClick={() => handleDelete(task)}
                className={s.task__item__done}
            >
                <Done/>
            </button>
            </div>
            <label>
                <input
                    type="checkbox"
                    className="checkbox-input"
                    onClick={() => handleDone(task)}
                    defaultChecked={task.done}
                />
                <span className={s.task__item__title}>{ task.title }</span>
            </label>
           
        </li>
    )
}
 
export default TaskItem