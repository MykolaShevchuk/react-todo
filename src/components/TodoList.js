import React from "react";
import {TodoItem} from "./TodoItem";

export const TodoList = (props) => {
  return (
    <ul className="list-group">{props.items.map((item) => {
      return (<TodoItem {...props} key={item.id} item={item}/>)
    })}</ul>
  )
};