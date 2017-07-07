import React from "react";
import {TodoInput} from "./TodoInput";

export const TodoSectionItem = ({item, remove, addUser}) => {
  const {users} = item;
  return (
    <li className="list-group-item todo-item">
      <div>
        <b>{item.title}</b>
        <span className="badge" onClick={() => remove(item.id)}>x</span>
        {users ? users.map((user) => <div className="small" key={user.id}>{user.email}</div>) : null }
      </div><br/>
      <TodoInput add={addUser} id={item.id}/>
    </li>
  )
};