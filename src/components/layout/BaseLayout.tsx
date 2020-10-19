import React, { ReactNode } from "react"

import s from "./BaseLayout.module.scss"

interface BaseLayoutProps {
  children: ReactNode
}

export default ({ children }: BaseLayoutProps) => (
  <div className={s.layout}>
    <div className={s.layout__inner}>
    {children}
    </div>
  </div>
)
