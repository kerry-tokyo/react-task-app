import React, { ReactNode } from "react";

import s from "./Card.module.scss";


interface CardProps {
  children: ReactNode;
  title: ReactNode;
  text?: string;
}
export const Card = ({ children, title, text }: CardProps ) => {
  return (
    <div className={s.card}>
      <h1 className={s.card__title}>{title}</h1>
      {text ? <p className={s.card_text}>{text}</p>: ''}
      {children}
    </div>
  );
};
