import React, { useState } from "react";

import BaseLayout from "components/layout/BaseLayout";
import { TaskNav } from "components/task/TaskNav";
import TaskList from "components/task/TaskList";
import TaskAdd from "components/task/TaskAdd";
import { Task } from "components/task/Types";

const initialState: Task[] = [];

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);

  return (
    <BaseLayout>
      <TaskNav>
        <TaskAdd tasks={tasks} setTasks={setTasks} />
      </TaskNav>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </BaseLayout>
  );
};

export default App;
