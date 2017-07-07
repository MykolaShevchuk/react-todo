import React from "react";

export const ProfileItem = (props) => {
  return (
    <li className="list-group-item todo-item">
      <span>{props.item.id}. {props.item.email}</span>
    </li>
  )
};