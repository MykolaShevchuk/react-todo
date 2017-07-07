import React from "react";
import {TodoSectionItem} from "./TodoSectionItem";

export const TodoSectionList = ({items, remove, addUser, user}) => {
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <TodoSectionItem
            key={item.id}
            item={item}
            remove={remove}
            addUser={addUser}
          />
        ))}
      </ul>
    </div>
  )
};