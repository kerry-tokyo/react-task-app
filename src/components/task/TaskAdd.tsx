import React, { useState } from "react";

import { Task } from "./Types";
import { ReactComponent as Add } from "assets/icons/add.svg";

import s from "./Task.module.scss";

type Props = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  tasks: Task[];
};

const TaskAdd: React.FC<Props> = ({ setTasks, tasks }) => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [count, setCount] = useState<number>(tasks.length + 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const handleSubmit = () => {
    setCount(count + 1);

    const newTask: Task = {
      id: count,
      title: inputTitle,
      done: false,
    };

    setTasks([newTask, ...tasks]);
    setInputTitle("");
  };

  return (
    <div className={s.task__add}>
      <div className={s.task__add__input}>
        <input
          type="text"
          className="input"
          value={inputTitle}
          onChange={handleInputChange}
        />
        <button className={s.task__add__button} onClick={handleSubmit}>
          <Add />
        </button>
      </div>
    </div>
  );
};

export default TaskAdd;
