import React, { ReactNode } from "react"

import s from "./Task.module.scss"

interface TaskNavProps {
  children: ReactNode
}

export const TaskNav = ({ children }: TaskNavProps) => (

  <div className={s.task__nav}>
      <h1 className={s.task__nav__title}>Task</h1>
      {children}
  </div>
)
